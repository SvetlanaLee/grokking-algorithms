// Написать функцию, которая будет высчитывать факториал

function factorial(number) {
 
  if(number <= 1) {
    return 1
  } else {
    return number * factorial(number - 1)
  }

}

console.log(factorial(5))

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.


function digitalRoot(n) {
  const nInStr = '' + n;
  let result = 0;
 
  for(let i = 0; i < nInStr.length; i++) {
    result += Number(nInStr[i])
  }

  if(nInStr.length > 1) {
    return digitalRoot(result)
  } else {
    return n
  }
}

console.log(digitalRoot(456))


