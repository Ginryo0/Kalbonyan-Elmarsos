const intervalId = setInterval(() => {
  console.log('Loading anayltics...');
}, 2000); // same parameters as setTimeOut

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});
