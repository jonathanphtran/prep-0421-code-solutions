function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var mins = convertHoursToMinutes(5);
console.log('min', mins);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greet = getGreeting('John');
console.log('greet ' + greet);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var solution = addAndMultiplyBy5(10, 5);
console.log('solution ', solution);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var solution2 = multiplyAndDivideBy5(35, 10);
console.log('solution ', solution2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var solution3 = subtractTwoNumbers(22, 7);
console.log('solution ', solution3);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log('circumference ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Jonathan', 'Tran');
console.log('fullName', fullName);

function cube(number) {
  return number ** 3;
}
var cubeSolution = cube(5);
console.log('cube', cubeSolution);
