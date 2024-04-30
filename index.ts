#! /usr/bin/env node 

import inquirer from "inquirer"
import chalkAnimation from 'chalk-animation';
import chalk from "chalk"

console.log(chalk.bold.magenta(`Welcome in my app.Its a word counter App. 
Using this app you can simply count
number of words with in a Sentence as well as in larger Paragrah`))

const answers: {
    Sentence: string
} = await inquirer.prompt([
{
    name: "Sentence",
    type: (chalk.bold.magenta("input")),
    message: (chalk.bold.yellow.underline("Enter your sentence to count the word:"))
}
])
const words = answers.Sentence.trim().split(" ")
//Print the array of words
console.log(words)
// print the word count of the sentence to the console
console.log(chalk.bold.red(`There are  ${words.length} words in your given sentence/ paragraph.`));

console.log(chalk.bold.cyan(`
 Thank You to visit my Project.`))


