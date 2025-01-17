// Iteration 1: Names and Input

let hacker1 = "Hard drives";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Google Chrome";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  
}else if (hacker2.length > hacker1.length) {
 console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}else if (hacker2.length === hacker1.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} 

// Iteration 3: Loops

console.log(hacker1.toUpperCase());

function reverse(navigator){
    return navigator.split("").reverse().join("");
}

newHacker1 = reverse(hacker1);
console.log(newHacker1);


allValues = ["Hard drives", "Google Chrome"];
console.log(allValues.sort());

if ("Google Chrome" > "Hard drives") {
  console.log("The driver's name goes first.")

} else if ("Hard drives" > "Google Chrome") {
  console.log("Yo, the navigator goes first definitely.")

} else if ("Hard drives" === "Google Chrome") {
  console.log("What?! You both have the same name?")
} 


