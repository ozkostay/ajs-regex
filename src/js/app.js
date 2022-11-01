import Validator from './validator';

const person = new Validator('aah', /^[a-zA-Z]{1}[\w\-]+[a-zA-Z]{1}$/);

console.log(person);
console.log(person.validateUsername());

// https://github.com/netology-code/ajs-homeworks/tree/ajs8/regex

