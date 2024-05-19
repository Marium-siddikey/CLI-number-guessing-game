#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twelcome to mariumsiddikey - CLI Number guessing game\n");
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "enter your guess number(number limit from 1-3):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation you guess the correct number.");
}
else {
    console.log("sorry, your guess was wrong");
}
