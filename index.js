const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

const bgColorChanger = {
  intervalId: null,
  isActive: false,

  start() {
    if (startRef.hasAttribute('disabled')) {
      return;
    }
    startRef.setAttribute('disabled', 'true');
    this.intervalId = setInterval(() => {
      colorPalette();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    startRef.removeAttribute('disabled');
  },
};

startRef.addEventListener('click', bgColorChanger.start.bind(bgColorChanger));
stopRef.addEventListener('click', bgColorChanger.stop.bind(bgColorChanger));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorPalette() {
  return (bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]);
}