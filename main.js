#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let questions = await inquirer.prompt([
        {
            name: 'ToDos',
            message: 'Enter your ToDos',
            type: 'input',
            validate: (input) => {
                if (input == '') {
                    return 'Please enter a valid todo';
                }
                return true;
            }
        },
        {
            name: 'moreToDos',
            message: 'Would you like to add more todos?',
            type: 'confirm',
            default: true
        }
    ]);
    todo.push(questions.ToDos);
    console.log(todo);
    condition = questions.moreToDos;
}
