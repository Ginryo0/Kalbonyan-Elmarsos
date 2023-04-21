// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const promise = new Promise();
  console.log(promise);
  const text = textParagraph.textContent;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    // fallback code - you can pre select the text to be copied manually
    alert('Feature not supported, please copy manually');
  }
});
