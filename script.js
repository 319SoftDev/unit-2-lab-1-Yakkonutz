// Mild Challenges 

// The three siblings get their allowance once a week.
let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

// 1. If divided evenly, how much would each sibling get for the week?
let eachSiblingGets = (weeklyAllowance / 3).toFixed(2);
console.log(`Each sibling gets $${eachSiblingGets}.`);

// 2. How many games can Jordan buy with their cut?
let gamesJordanCanBuy = Math.floor(eachSiblingGets / game);
console.log(`${sibling1} can buy ${gamesJordanCanBuy} games with their share.`);


// 3. The cost of games just went up by a dollar and shoes are on sale at 50% off.
game = 16.99; // New game price
shoes /= 2; // New shoes price is now $44.89
console.log(`New game price: $${game.toFixed(2)}, new shoes price: $${shoes.toFixed(2)}.`);

// 4. Quinn and Ricardo are twins. If they put their money together, how many shoes can they buy in a month?
let quinnAndRicardo = (eachSiblingGets * 2) * 4; // Total for both
let shoesCanBuy = Math.floor(quinnAndRicardo / shoes);
console.log(`Together, they can buy ${shoesCanBuy} pairs of shoes in a month.`);

// 5. How many more games can they buy together compared to buying individually?
let totalGamesIndividually = gamesJordanCanBuy + Math.floor(eachSiblingGets / game);
let totalGamesTogether = Math.floor(quinnAndRicardo / game);
let moreGames = totalGamesTogether - totalGamesIndividually;
console.log(`By pooling their money, they can buy ${moreGames} more games together than separately.`);

// 6. Print out the three siblings' names.
console.log(`The three siblings are ${sibling1}, ${sibling2}, and ${sibling3}.`);

// 7. Count how many characters are in Ricardo's name.
console.log(`Ricardo's name has ${sibling3.length} characters.`);

// 8. Print out "RICARDO MONTOYA DE LA ROSA RAMIREZ" in uppercase.
console.log(sibling3.toUpperCase());

// 9. Print out "ricardo montoya de la rosa ramirez" in lowercase.
console.log(sibling3.toLowerCase());

// 10. Print Ricardo's name with all 'a's removed.
console.log(sibling3.replace(/a/g, ''));

// 11. Print out "De La Rosa"
console.log(sibling3.slice(19, 30)); // Extracts "De La Rosa"

// Medium Challenges

// 12. Rewrite these functions as arrow functions.
const getRandomNum = () => Math.floor(Math.random() * 100);
const greeting = name => `Hello ${name}, I'm glad you can make it!`;
const perfectRoot = x => {
    let root = Math.sqrt(x);
    return Math.floor(root) === root ? root : "No perfect root";
};

// Testing the arrow functions
console.log(`Random number: ${getRandomNum()}`);
console.log(greeting(""));
console.log(`Perfect root of 16: ${perfectRoot(16)}`);

// 13. Fix/Finish the following functions.

// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    return x + y; // Return the sum directly
}
console.log(`Sum of 4 and 6: ${addNums(4, 6)}`);

// b. Special message if the name is "Beyonce"
const isBeyonce = name => {
    return name === "Beyonce" ? "Welcome Queen!" : `Sorry ${name}, you're not Beyonce`;
}
console.log(isBeyonce("Beyonce")); // Special message
console.log(isBeyonce("Jay-Z")); // General message

// c. If the number is even, return the number divided by 2, otherwise, return the number
const reduceEvens = x => {
    return x % 2 === 0 ? x / 2 : x;
}
console.log(`Reducing 10 gives: ${reduceEvens(10)}`);
console.log(`Reducing 11 gives: ${reduceEvens(11)}`);

// 14. Function to return the first 10 characters of a string if longer than 10
const shortenString = string => {
    return string.length > 10 ? string.slice(0, 10) : string;
}
console.log(`Shortened "Hello, World!": "${shortenString("Hello, World!")}"`);
console.log(`Shortened "Short": "${shortenString("Short")}"`);

// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;

// 15. Function to determine how many burgers can be bought with a budget
const buyBurgers = budget => {
    let numBurgers = Math.floor(budget / burger);
    return numBurgers > 0 ? `You can buy ${numBurgers} burgers.` : "Sorry, no burgers for you.";
}
console.log(buyBurgers(20)); // Example output
console.log(buyBurgers(5)); // "Sorry, no burgers for you."

// 16. Function to determine how many meals can be bought
const buyMeals = budget => {
    let mealCost = burger + fries + soda; // Total cost of one meal
    let numMeals = Math.floor(budget / mealCost);
    let leftover = (budget % mealCost).toFixed(2); // Money left after buying meals
    return `With $${budget}, you can buy ${numMeals} meals and have $${leftover} left over.`;
}
console.log(buyMeals(50)); // Example output
console.log(buyMeals(10)); // Example output

// 17. Function to calculate the missing leg of a right triangle
const missingLeg = (hypotenuse, leg) => {
    let missing = Math.sqrt(hypotenuse ** 2 - leg ** 2);
    console.log(`The missing leg's length is: ${missing.toFixed(2)}.`);
}
missingLeg(5, 3); // Example call


// im not doing the super challenge
