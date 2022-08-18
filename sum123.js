function sum(num) {
  let result = num;

  function f(num2) {
    if(num2) {
      result += num2;
      return f;
    } else {
      return console.log(result)
    }
  }

  return f;
}


sum(1)(2)(3)()
