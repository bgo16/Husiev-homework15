function myFunc() {
  let sum = 0;
  return function (a) {
    return (sum += a);
  };
}

const sum = myFunc();
const sum1 = myFunc();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
console.log('======');
console.log(sum1(12));
console.log(sum(13));
console.log(sum1(45));
