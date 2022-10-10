const colors = {
  white: '#fff',
  dark: '#000',
  gray: '#808080',
};

const font = 'Helvetica, sans-serif';

const fontSizes = [16, 24, 32, 48, 64];
const percentageSizes = [15, 20, 25, 30, 33, 40, 50, 60, 70, 90, 100];

const durations = {
  second: [0.25, 0.5, 1, 1.5, 2, 2.5, 3],
  millisecond: [1000, 3000, 5000, 7000, 9000],
};

export default {
  colors,
  font,
  fontSizes,
  durations,
  percentageSizes,
  boxShadows: ['-3px 3px 3px'],
  opacity: [0, 0.25, 0.5, 0.75, 1],
  scales: [0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95],
  spaces: [0, 4, 8, 12, 16, 24, 48],
  widths: [16, 24, 32, 50, 64, 100, 150, 200, 250, 300, 350, 380, 400],
  heights: [25, 50, 75, 100, 125, 150],
  positions: [0, 10, 20, 30, 40, 50],
  borderRadius: [4, 8, 12, 16, 24],
};
