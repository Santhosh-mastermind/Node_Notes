//Arrow  functions
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

const sum1 = function (a, b) {
  return a + b;
};
console.log(sum1(1, 2));

const sum2 = (a, b) => a + b;
console.log(sum2(1, 2));
const sum3 = (a) => a + 1;
console.log(sum3(10));
