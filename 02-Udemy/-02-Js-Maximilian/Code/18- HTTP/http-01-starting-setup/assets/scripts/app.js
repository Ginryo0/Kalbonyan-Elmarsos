const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader('Content-Type', 'application/json'); //-> adding headers

  //   xhr.open(method, url); // no network yet - configured only
  // xhr.response -> to access response data
  //   xhr.responseType = 'json'; // automatic parsing
  //   xhr.onload = function () {
  //     // onload -> catch server side errors
  //     if (xhr.status >= 200 && xhr.status <= 300) {
  //       // catching server side errors -> +300 like 404
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error('something went wrong!'));
  //     }
  //   };

  //   xhr.onerror = function () {
  //     // onerror -> catch client side
  //     // client side errors -> network errors ...etc
  //     reject(new Error('Failed to send request!'));
  //   };
  //   xhr.send(JSON.stringify(data));
  // });
  // return promise;

  // default -> get
  return fetch(url, {
    method: method,
    // body: JSON.stringify(data),
    body: data,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  })
    .then((response) => {
      //response.blob() -> in downloaded files to open .text()
      if (response.status >= 200 && response.status < 300) {
        return response.json(); // convert streamed JSON into a snapshot JS object
      } else {
        // need to convert data to a snapshot -> check for error --- you need to return to take error data into outer promise chain so you could actually throw an error while having access to error data
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error('something went wrong - server side');
        });
      }
    })
    .catch((error) => {
      // catching client side errors
      console.log(error);
      throw new Error('something went wrong');
    });
}

async function fetchPosts() {
  try {
    // catching errors with try / catch
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );

    for (const post of responseData) {
      const postEl = document.importNode(postTemplate.content, true); // import template content not template itself
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  const fd = new FormData(form); // takes form input -> must have name
  fd.append('userId', userId);
  // fd.append('someFile', ,'pic.png' ) -> you can append files

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchBtn.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
  event.preventDefault(); // don't submit form
  const enteredTitle = event.currentTarget.querySelector('#title').value; // currentTarget -> form
  const enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent); // you call it here not bind or etc ...
  event.currentTarget.querySelector('#title').value = '';
  event.currentTarget.querySelector('#content').value = '';
});

postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    event.target.closest('li').remove();
  }
});
