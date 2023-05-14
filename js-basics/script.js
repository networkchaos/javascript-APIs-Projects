

//Variables = store data temporary to use it in the future
// variables cannot be a reserved keyboard
//variables should be meaningful use decriptive names
// cannot start with numbers
//cannot contain a space or hiphen (-)
// Allowed let fisrtName = camel notation
// Are case sensitive
// value of a const cannot change
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//primitive types/value tupes= string, bolean(brings abot logic),number,undifined is a type and a value=to undefined, null; 

//reference type= object, arrays and functions
//objects =properties of a person
let person= {
name: 'Mosh',
age:30

//object
};
person.name = 'George';


//bracket notation
let selection = 'name';
person[selection] = 'colo'

console.log(person.name);

//arrays

let seletedColors = ['red', 'blue'];
seletedColors[2] = 1;
console.log(seletedColors.length);

//static and dynamic language of programming


//functions
function greet(name , lastName){
//body
console.log("hello" + name + '' , lastName);

}
greet(' john', 'Smith');
//calculates a value

function square(number){
return number * number;



}
let number = square(2);
console.log(number);













