/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  rules: {
    "jsx-a11y/anchor-has-content": [
      2,
      {
        components: ["Anchor"],
      },
    ],
  },
}
