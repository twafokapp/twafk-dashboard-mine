export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refac',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'ci',
        'build',
        'hotfix',
      ],
    ],
    'subject-case': [0],
    'header-max-length': [2, 'always', 150], // Allow longer first line (type: subject)
    'body-max-line-length': [1, 'always', 200], // More flexible body lines (warning only)
    'footer-max-line-length': [1, 'always', 200],
  },
};
