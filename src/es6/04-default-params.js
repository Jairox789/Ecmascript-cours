function newUser(name,age,country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX'
    console.log(name,age,country);
}

newUser();
newUser('Jairo',12,'USA');

//ECMA SCRIPT 6

function newAdmin(name='Oscar', age=34,country='MX'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Jairo',12,'USA');