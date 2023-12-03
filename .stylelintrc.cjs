module.exports = {
  rules: {
    // Enforce prefixes on classnames and keyframes
    'selector-class-pattern': /^-?m-|^mooncell-themes$|^(light|dark)(-theme)?$/,
    'keyframes-name-pattern': /^m-([a-z]|-)+$/,
  },
};
