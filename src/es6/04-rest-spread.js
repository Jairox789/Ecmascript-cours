//arrays destructuring

let fruits = ['Apple','Banana'];
let [a,b]=fruits;
console.log(a,b);

//object destructuring

let user = { username: 'Jairo',age:21 };
let { username,age } = user;
console.log(username,user.age);

//spread operator

let person = { name: 'Jairo', age: 21 };
let country = 'MX';

let data = { id: 1, ...person, country };
console.log(data);

//rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}   

sum(1 , 1, 2, 3);


//En este deafío recibirás dos objetos JSON por parámetros.

//Usando el spread operator, deberás combinar ambos objetos en uno solo. Es posible que no se te envíe alguno de los dos objetos o ninguno, por lo que deberás usar estos por defecto, en su respectivo orden:

export function solution(json1 ={ name: 'Mr. Michi', food: 'Pescado' }, json2 = { age: 12, color: 'Blanco' }) {
    return  { ...json1, ...json2 };
}