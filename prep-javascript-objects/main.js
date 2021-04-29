const person = {
  firstName: 'Jonathan',
  lastName: 'Tran',
  hobby: 'video games'
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is:", fullName);
person.job = 'Web Developer';
person.previousJob = 'Delivery Driver';
console.log("This person's current job is " + person.job);
console.log("This person's previous job is " + person.previousJob);
console.log(person);

const myCar = {
  make: 'Toyota',
  model: 'Camry',
  year: '2014'
};

myCar['owner'] = fullName;
console.log('My name is ' + myCar['owner'] + ', and I drive a ' +
             myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');
myCar['color'] = 'grey';
console.log(myCar);
