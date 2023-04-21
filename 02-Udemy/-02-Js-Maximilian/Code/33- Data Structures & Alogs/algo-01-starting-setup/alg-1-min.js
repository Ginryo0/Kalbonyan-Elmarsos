// Best Case: single el -> [5] => O(1);
// Worst Case: 2+ els -> [2, 1] => O(2);
function getMin(numbers) {
  // [3, 1, 2]
  if (!numbers.length) {
    // 1 exec
    throw new Error('Should not be an empty array');
  }
  let currentMin = numbers[0]; // 1 exec -> on average = valid data

  for (let i = 1; i < numbers.length; i++) {
    // 1 exec
    // console.log('Execution - FOR');
    if (numbers[i] < currentMin) {
      // 2 exec
      currentMin = numbers[i]; // 1 exec (0 - 2 exec)
    }
  }

  return currentMin; // 1 exec
}

// T = n  - Linear Time Complexity  => O(n)-> (c1 + n*c2 + c3 -> c = constants  - n = length)

// Best Case: ordered array -> [1, 2, 3] => O(n^2);
// Worst Case: unordered -> [3, 2, 1] => O(n^2);
// AVG: [?, ?, ?] => O(n^2)
function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array');
  }

  for (let i = 0; i < numbers.length; i++) {
    // n - 1 executions
    let outterEl = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      // n - 1 executinos
      let innerEl = numbers[j];
      if (innerEl < outterEl) {
        numbers[i] = innerEl;
        numbers[j] = outterEl;

        innerEl = numbers[i];
        outterEl = numbers[j];
      }
    }
  }
  return numbers[0];
}

// Time complexity = n * n => O(n^2) - Quadratic time complexity
const testNumbers = [1, 2, 3];
const min = getMin2(testNumbers);
console.log(min);
