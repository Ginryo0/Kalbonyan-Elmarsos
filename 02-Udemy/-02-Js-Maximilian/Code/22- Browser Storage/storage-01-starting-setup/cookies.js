const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = { name: 'Mohm', age: 20 }; // max-age in seconds - expires -> date
  document.cookie = `uid=${userId}; max-age=360`; // triggers a set function a add a new key value pairs
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((i) => i.trim());
  console.log(data[1].split('=')[1]); //user value - better use .includes()
});
