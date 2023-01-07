//enahced object literals
function newUser(user, age, country,uId) {
    return{
        user,
        age,
        country,
        id:uId
    }
}

console.log(newUser('Jairo',21,'MX',55555));