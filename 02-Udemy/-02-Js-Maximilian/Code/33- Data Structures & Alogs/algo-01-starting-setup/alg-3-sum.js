function sumUp(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
// Linear -> O(n)
console.log(sumUp([1, 2, 5]));
