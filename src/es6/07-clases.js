//declarando
class User {};
//instancia de una clase
//const newUser = new User();

class user{
    //Metodos
    greeting(){
        return 'Hello';
    }
};

const jairo = new user();
console.log(jairo.greeting());

//constructor
class user{
    //Constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}