module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/prettier',
    'prettier/vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-indent': ['warning', 'tab'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          normal: 'never'
        }
      }
    ],
    'vue/no-multi-spaces': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
