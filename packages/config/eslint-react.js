/**
 * yarn add -D eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
 */
 module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020, //eslint or parse modern javascript
      sourceType: 'module', //allow us to use import/export
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    //list of rules or configuration must extend, we instruct eslint to use the rules from below plugins
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:jsx-a11y/recommended',
      'plugin:eslint-comments/recommended',
    //   'prettier/@typescript-eslint',
    //   'plugin:prettier/recommended',
    ],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-var-requires': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
}