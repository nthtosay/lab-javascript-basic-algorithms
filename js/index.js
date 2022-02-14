// Iteration 1: Names and Input
 const hacker1 = "michaelantio12342" 
 console.log(`The driver's name is ${hacker1}`)
 const hacker2 = "anmana";
 console.log(`The navigator's name is ${hacker2}`); 
// Iteration 2: Conditionals
const nameOnelength = hacker1.length;
const nameTwoLength = hacker2.length;
switch(true){
    case nameOnelength> nameTwoLength:
        console.log(`The driver has the longest name, it has ${nameOnelength} characters`);
        break;
    case nameOnelength <nameTwoLength:
        console.log(`It seems that the navigator has the longest name, it has ${nameTwolength} characters`);
        break;
    case nameOnelength == nameTwoLength:
        console.log(`Wow, you both have equally long names, ${nameOnelength} characters!`);
        break;
}


// Iteration 3: Loops

// 3.1 
const driver = hacker1.split('').join(' ').toUpperCase();
console.log(driver);
//3.2

const reverse1 = hacker2.split("").reverse().join("");
console.log(reverse1);
// 3.2
 let reverse2 =""
for (let i = nameTwoLength - 1; i >= 0; i--) {
    reverse2 += hacker2[i];
} 
console.log(reverse2);

//3.3 


if(hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first.");
    }else if(hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first definitely.");
    }   else if(hacker1 === hacker2){
        console.log("What?! You both have the same name?");
}
