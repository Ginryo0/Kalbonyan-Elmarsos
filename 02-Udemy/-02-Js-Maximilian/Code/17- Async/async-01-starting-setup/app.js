const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, duration);
  });

  return promise;
};

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // getPosition()
  //   .then(
  //     (posData) => {
  //       positionData = posData;
  //       return setTimer(2000);
  //     }
  //     // ,(err) => console.log(err)
  //   )
  //   .catch((err) => {
  //     console.log(err);
  //     return 'on we go ...'; // -> data
  //   }) // skips only the prior then in chain
  //   .then((data) => {
  //     console.log(data, positionData);
  //   });
  // setTimer(1000).then(() => {
  //   console.log('timer done!');
  // });
  // console.log('Getting position...'); // executed first always
}

button.addEventListener('click', trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
  console.log('race');
});

Promise.all([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
  console.log('all');
});

Promise.allSettled([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
  console.log('settle');
});
// let result = 0;

// for (let i = 0; i < 1000000; i++){
//   result += i;
// }

// console.log(result);
