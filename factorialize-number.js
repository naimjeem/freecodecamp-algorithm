const factorializeNum = (num) => {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorializeNum(num - 1);
  }
};

console.log('-----------------------------');
console.log('Factorial: ', factorializeNum(3));
console.log('-----------------------------');
