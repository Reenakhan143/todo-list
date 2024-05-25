#! /user/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstquestion",
            message: "What do you want to add in your Todos?",
            type: "input",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        }
    ]);
    todo.push(todoQuestion.firstquestion);
    condition = todoQuestion.secondQuestion;
    console.log(todo);
}
;
