var lastName='David';
lastName='Oscar';
console.log(lastName);

let favoriteGame='RD2';
favoriteGame='Fallout';
console.log(favoriteGame); 

const favoriteFood='Burguer';
favoriteFood='Taco';
console.log(favoriteFood);

const games=() =>{
    if(true){
        var game1='RD2';        //function scope
        let game2='Fallout';    //block scope
        const game3='GTA';      //block scope
    }
    console.log(game1);
    console.log(game2);
    console.log(game3);
}
games();