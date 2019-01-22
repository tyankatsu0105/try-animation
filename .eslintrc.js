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
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@']
      }
    ],
    'import/extensions': 0,
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
  },
  globals: {
    TimelineLite: false,
    TimelineMax: false,
    TweenLite: false,
    TweenMax: false,
    Back: false,
    Bounce: false,
    Circ: false,
    Cubic: false,
    Ease: false,
    EaseLookup: false,
    Elastic: false,
    Expo: false,
    Linear: false,
    Power0: false,
    Power1: false,
    Power2: false,
    Power3: false,
    Power4: false,
    Quad: false,
    Quart: false,
    Quint: false,
    RoughEase: false,
    Sine: false,
    SlowMo: false,
    SteppedEase: false,
    Strong: false,
    Draggable: false,
    SplitText: false,
    VelocityTracker: false,
    CSSPlugin: false,
    ThrowPropsPlugin: false,
    BezierPlugin: false
  }
};
