const prompt = require('prompt-sync')();

function divisibles(arr, divisor) {
  let divisiblesArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      divisiblesArr.push(arr[i]);
    }
  }
  return divisiblesArr;
}


console.log(divisibles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 2))
console.log(divisibles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 3))
console.log(divisibles([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 4))


