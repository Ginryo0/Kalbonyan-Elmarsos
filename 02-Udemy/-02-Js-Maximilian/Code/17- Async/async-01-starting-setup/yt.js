const example = {
  data: 'a',
  next: { data: 'b', next: { data: 'c', next: { data: 'd', next: null } } },
};
// function lastThree(ex) {
//   const array = [];
//   if (ex !== null && ex.next !== null) {
//     array.push(...lastThree(ex.next));
//   }
//   array.push(ex.data);
//   return array;
// }

// console.log(lastThree(example).slice(0, 3));

// function lastThree(example) {
//   const letters = [];

//   function getLetter(obj) {
//     if (obj.data) {
//       letters.push(obj.data);
//     }
//     if (obj.next) {
//       getLetter(obj.next);
//     }
//   }
//   getLetter(example);
//   const lastThree = letters.slice(letters.length - 3);
//   return lastThree.join('');
// }

// console.log(lastThree(example));

function lastThree(input, x, y, z) {
  if (input == null) {
    return [x, y, z];
  }
  return lastThree(input.next, y, z, input.data);
}

console.log(lastThree(example));
