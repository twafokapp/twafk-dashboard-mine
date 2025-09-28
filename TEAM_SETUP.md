# Team Development Setup Guide

## Code Formatting & Quality Standards

This project uses automated code formatting and linting to ensure consistent code style across all team members, regardless of individual IDE settings.

## Required Setup for Team Members

### 1. Install Dependencies

```bash
npm install
```

### 2. Initialize Git Hooks

```bash
npm run prepare
```

### 3. VS Code Users (Recommended)

Install the recommended extensions when prompted, or manually install:

- **Prettier - Code formatter** (esbenp.prettier-vscode)
- **ESLint** (dbaeumer.vscode-eslint)
- **EditorConfig** (editorconfig.editorconfig)
- **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)

The project includes VS Code workspace settings that will override your personal settings for consistency.

### 4. Other IDEs

- Install Prettier and ESLint plugins
- Enable "format on save"
- Set Prettier as the default formatter
- Ensure EditorConfig support is enabled

## Automatic Code Formatting

### Pre-commit Hooks

- **Automatic formatting** with Prettier
- **Automatic linting** with ESLint (with auto-fix)
- **Commit message validation** (conventional commits)

### Available Commands

```bash
# Format all files
npm run format

# Check if files are properly formatted
npm run format:check

# Fix both formatting and linting issues
npm run format:fix

# Lint only
npm run lint

# Lint with auto-fix
npm run lint:fix
```

## Code Style Rules

### Prettier Configuration

- **Semicolons**: Required
- **Quotes**: Single quotes for JS/TS, single quotes for JSX
- **Tab Width**: 2 spaces
- **Line Width**: 100 characters
- **Trailing Commas**: ES5 compatible
- **Line Endings**: LF (Unix style)

### ESLint Rules

- **No console statements** (use proper logging)
- **React hooks rules** (proper dependencies)
- **TypeScript recommended rules**

## File Exclusions

The following files/folders are excluded from formatting:

- `node_modules/`
- `dist/`, `build/`
- Lock files (`package-lock.json`, `yarn.lock`)
- Minified files (`*.min.js`, `*.min.css`)
- Environment files (`.env*`)

## Troubleshooting

### "Prettier/ESLint not working"

1. Restart your IDE
2. Check that extensions are installed and enabled
3. Run `npm run format` manually
4. Check the Output panel for errors

### "Pre-commit hook failing"

1. Run `npm run format:fix` to fix issues
2. Stage your changes: `git add .`
3. Try committing again

### "Different formatting on my machine"

1. Ensure you're using the project's Prettier config
2. Check that `prettier.requireConfig` is enabled in VS Code
3. Disable any global Prettier settings that might interfere

## For New Team Members

1. Clone the repository
2. Run `npm install`
3. Run `npm run prepare`
4. Install recommended VS Code extensions
5. Your first commit should trigger the formatting hooks automatically

## Enforced Standards

- ✅ **Consistent indentation** (2 spaces)
- ✅ **Consistent quotes** (single quotes)
- ✅ **Consistent line endings** (LF)
- ✅ **No trailing whitespace**
- ✅ **Final newline in files**
- ✅ **No console statements in production code**
- ✅ **Proper React hooks usage**

These standards are **automatically enforced** through pre-commit hooks and cannot be bypassed without explicit override (`--no-verify`).
