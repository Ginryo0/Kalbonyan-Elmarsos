function isEvenOrOdd(n) {
  // const res = n % 2;
  // if (res === 0){
  //   return 'Even';
  // } else {
  //   return 'Odd'
  // }
  return n % 2 ? 'Odd' : 'Even'; // 0 -> false
}
// Constant Time Complexity -> O(1)
console.log(isEvenOrOdd(5));
console.log(isEvenOrOdd(0));
