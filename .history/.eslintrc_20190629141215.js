module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue', '@typescript-eslint'],
  // ここにカスタムルールを追加します。
  rules: {
    semi: [2, 'never'],
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
        trailingComma: 'es5'
      }
    ]
  }
}