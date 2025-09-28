#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';
// Get the commit message file path from the arguments
const commitMsgFile = process.argv[2];

try {
  // Run commitlint on the commit message file
  execSync(`npx --no -- commitlint --edit ${commitMsgFile}`, { stdio: 'pipe' });

  process.exit(0);
} catch (error) {
  const commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim();

  console.log('\n🔍 DEBUG - Actual error from commitlint:');
  console.log(error.stdout || error.message);

  console.log('\n');
  console.log('❌ COMMIT REJECTED - Invalid commit message format!');
  console.log('\n');
  console.log('Your commit message: "' + commitMsg + '"');
  console.log('\n');
  console.log('=== Nakhdemak Commit Message Guidelines ===');
  console.log('Commit messages must follow this format:');
  console.log('  <type>: <description>');
  console.log('\n');
  console.log('Where <type> is one of:');
  console.log('  feat     - A new feature');
  console.log('  fix      - A bug fix');
  console.log('  docs     - Documentation changes');
  console.log('  style    - Code style changes (formatting, etc)');
  console.log('  refactor - Code changes that neither fix bugs nor add features');
  console.log('  perf     - Performance improvements');
  console.log('  test     - Adding or fixing tests');
  console.log('  chore    - Changes to build process or tooling');
  console.log(
    '  hotfix   - Urgent fixes that are done on the spot and could be changed in the near future'
  );
  console.log('\n');
  console.log('Examples of valid commit messages:');
  console.log('  feat: add login button to homepage');
  console.log('  fix: resolve issue with payment processing');
  console.log('  docs: update README with setup instructions');
  console.log('\n');
  console.log('Need to commit without validation? Use:');
  console.log('((NOT RECOMMENDED))  git commit --no-verify -m "your message"');
  console.log('\n');

  process.exit(1);
}
