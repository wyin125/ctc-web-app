export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    body: '#F7F7F7',
    primary: '#FAAC1E',
    danger: '#DD1144',
    text: '#707070',
    darkText: '#1D1E1E',
    placeholder: '#DDDDDD',
    border: '#DDDDDD',
    white: '#FFFFFF'
  },
  space: [...Array(20).keys()].map(val => val * 4),
  fonts: {},
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700
  },
  shadows: {
    medium: '0 3px 6px rgba(0, 0, 0, .16)'
  }
};
