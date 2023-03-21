//.cz-config.cjs
module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat:     A new feature" },
    { value: "🐛 fix", name: "🐛 fix:       A bug fix" },
    { value: "📝 docs", name: "📝 docs:     Documentation only changes" },
    {
      value: "😵 ts-challenge",
      name: "😵 ts-challenge:     record resolution"
    },
    {
      value: "📖 notes",
      name: "📖 notes:     record notes"
    },
    { value: "🧪 test", name: "🧪 test:     Adding missing tests" },
    { value: "🚧 WIP", name: "🚧 WIP:       Work in progress" }
  ],

  scopes: [
    { name: "accounts" },
    { name: "admin" },
    { name: "exampleScope" },
    { name: "changeMe" }
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you`re committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: "Provide a LONGER description of the change (optional). Use '|' to break new line:\n",
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?"
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body"],

  // limit subject length
  subjectLimit: 100
}
