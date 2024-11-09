//import the inquirer  module, which is CLI interface for Node.js
import inquirer from "inquirer";
//declare a constant "answers" and  assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word :"
    }
]);
const words = answers.sentence.trim().split(/\s+/);
//print the array of words to the console
console.log(words);
//print the word count of the sentencxe to the console
console.log(`Your sentence word count is ${words.length}`);
