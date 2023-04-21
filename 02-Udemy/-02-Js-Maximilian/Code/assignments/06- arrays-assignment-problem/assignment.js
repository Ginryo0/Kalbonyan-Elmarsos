// Max
const nums = [1, 2, 3, 4, 5, 6];
// 1
const numsGreater5 = nums.filter((n) => n > 5);
console.log(numsGreater5);

const mappedNums = nums.map((n) => ({
  num: n,
}));
console.log(mappedNums);

const multiplication = nums.reduce(
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(multiplication);

//2 - 3
// rest
function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) curMax = num;
    if (num < curMin) curMin = num;
  }
  return [curMin, curMax];
}

let [min, max] = findMinMax(...nums); // spread
console.log(min, max);

// 4
const userIds = new Set();
userIds.add(1);
userIds.add(5);
userIds.add(5);
console.log(userIds);

// Mine

// /// 1
// const nums = [1, 5, 10, 245, 20, 93];

// const filteredArray = nums.filter((n) => n > 5);

// const mappedArray = nums.map((n) => ({ num: n }));

// const reductionResult = nums.reduce((prev, curr) => prev * curr, 1);

// console.log(filteredArray);
// console.log(mappedArray);
// console.log(reductionResult);

// /// 2

// const findMax = (...numbers) => {
//   let s = numbers[0];
//   numbers.forEach((a) => (s = s > a ? s : a));
//   return s;
// };

// console.log(findMax(...nums));

// /// 3

// const findMaxMin = (...numbers) => {
//   let s = numbers[0],
//     m = numbers[0];
//   numbers.forEach((a) => {
//     s = s > a ? s : a;
//     m = m < a ? m : a;
//   });
//   const array = [m, s];
//   return array;
// };

// const [min, max] = findMaxMin(...nums);

// console.log(min, max);

// /// 4

// let numSet = new Set([1, 2, 3, 4, 1, 2, 3]);
// console.log(numSet);
