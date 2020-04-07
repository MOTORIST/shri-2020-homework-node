module.exports = {
  types: [
    { value: 'fix', name: 'fix: Fix bugs' },
    { value: 'feat', name: 'feat: Adding new functionality' },
    { value: 'build', name: 'build: Build project or change dependencies' },
    { value: 'test', name: 'test: Build test' },
    {
      value: 'refactor',
      name: 'refactor: Editing code without fixing bugs or adding new features',
    },
    {
      value: 'style',
      name: 'style: Edits by code style (tabs, indents, periods, commas ...)',
    },
    { value: 'perf', name: 'perf: Performance improvement' },
    { value: 'docs', name: 'docs: Update documentation' },
    { value: 'revert', name: 'revert: Rollback to previous commits' },
  ],
  scopes: [{ name: 'server' }, { name: 'client' }],

  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  messages: {
    type: 'What changes are you making?',
    scope: 'Select the scope that you changed (optional):',
    customScope: 'Insert your scope:',
    subject: 'Write a short description:',
    body: 'Write a detailed description (optional). Use "|" for a new line:',
    breaking: 'List BREAKING CHANGES (optional):',
    footer: 'Place for meta data (tasks, links):',
    confirmCommit: 'You are satisfied with the resulting commit?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: '#42343:',
  subjectLimit: 72,
};
