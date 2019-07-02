module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue'],
  // ここにカスタムルールを追加します。
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md#options
    // - 上記より下記 2 つの指定がインデントを 2 にする
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-console': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier/issues/2280#issuecomment-311326803
        singleQuote: true,
        trailingComma: true
      }
    ]
  }
}
