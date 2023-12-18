'use strict';
const foregroundColor = '#f7f5ba';
const backgroundColor = '#121609';
const lighterBackgroundColor = '#2e3817';
const borderColor = '#121609';
const cursorColor = '#ffbc30';
const cursorAccentColor = backgroundColor;
const selectionColor = 'rgba(251,0,152,0.4)';
const red = '#fe7002';
const green = '#2fd52c';
const yellow = '#e1d152';
const blue = '#57c7ff';
const magenta = '#945dc3';
const cyan = '#49a2a3';
const white = '#fdfcea';

const getColors = config => {
  // TODO: make color changes based on config here
  const colors = {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: lighterBackgroundColor,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor
    }
  };

  return colors;
}

exports.decorateConfig = (config) => {
  const colors = getColors(config);

  // TODO: any other config changes here

  return Object.assign({}, config, colors);
}
