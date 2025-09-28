#!/usr/bin/env sh

echo "🔍 Running pre-commit checks..."

# Get list of staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACMR)

if [ -z "$STAGED_FILES" ]; then
  echo "No files to check. Skipping pre-commit hooks."
  exit 0
fi

# Run linting only on staged files
echo "📝 Running code formatting on changed files..."
STAGED_JS_FILES=$(git diff --cached --name-only --diff-filter=ACMR -- "*.js" "*.jsx" "*.ts" "*.tsx")

if [ -n "$STAGED_JS_FILES" ]; then
  # Run ESLint on staged files
  echo "🔍 Running ESLint..."
  echo "$STAGED_JS_FILES" | xargs npx eslint --fix || {
    echo "❌ ESLint formatting failed"
    exit 1
  }

  # Run Prettier on staged files
  echo "✨ Running Prettier..."
  echo "$STAGED_JS_FILES" | xargs npx prettier --write || {
    echo "❌ Prettier formatting failed"
    exit 1
  }

  # Add the formatted files back to the staged area
  echo "$STAGED_JS_FILES" | xargs git add
else
  echo "No JavaScript/TypeScript files to lint or format."
fi

echo "✅ Pre-commit checks passed!"
