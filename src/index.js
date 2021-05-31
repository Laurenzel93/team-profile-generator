const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const employees = [];
const newFile = [];

let roleOptions = ["Engineer", "Intern", "Done building the team!"];

function managerQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the manager?',
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is the managers ID?',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the managers email?',
            },
            {
                type: 'input',
                name: 'ManagerNumber',
                message: 'What is the Managers phone number?',
            }

        ])
        .then(function (response) {

            const manager = new Manager(
                res.managerName,
                res.managerID,
                res.managerEmail,
                res.ManagerNumber);

            employees.push(manager);
        })
}

managerQuestions();

function newEmployee();
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Are you adding an intern or an engineer?',
            name: 'ManagerNumber',
            choices: roleOptions
        }

    ])
    .then(function (response) {
        if (res.employee === "Engineer") {
            engineerQuestions();
        } else if (res.employee === "Intern") {
            internQuestions();
        } else {
            createPage();
        }
    })
