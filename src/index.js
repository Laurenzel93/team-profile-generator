const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const employeesArray = [];
const newFile = [];

let roleOptions = [
    "Engineer",
    "Intern",
    "Done building the team!"
];

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
                message: 'What is the managers email address?',
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

            employeesArray.push(manager);

            if (res.ManagerNumber !== "") {
                newEmployee();
            }
        })
}

managerQuestions();


function newEmployee(); {
inquirer
    .prompt([
        {
            type: 'list',
            name: 'employees',
            message: 'Are you adding an intern or an engineer?',
            choices: roleOptions
        }

    ])
    .then(function (response) {
        if (res.employees === "Engineer") {
            engineerQuestions();
        } else if (res.employees === "Intern") {
            internQuestions();
        } else {
            createPage();
        }
    })
}

function engineerQuestions() {
    inquirer
        .prompt
        ([
            {
                type: 'input',
                name: "engineerName",
                message: "What is the name of the engineer?",
            },

            {
                type: 'input',
                name: "engineerID",
                message: "What is their employee ID?",
            },

            {
                type: 'input',
                name: "engineerEmailAddress",
                message: "What is their email address?",
            },

            {
                type: 'input',
                name: "engineerGitHub",
                message: "What is their GitHub username?",
            },

        ])

        .then(function (response) {

            const engineer = new Engineer(
                res.engineerName,
                res.engineerID,
                res.engineerEmailAddress,
                res.engineerGitHub);

            employeeArray.push(engineer);

            if (res.engineerGitHub !== "") {
                newEmployee();
            }
        })
}

function internQuestions() {
    inquirer
        .prompt
        ([
            {
                type: 'input',
                name: "internName",
                message: "What is the name of the intern?",
            },

            {
                type: 'input',
                name: "internID",
                message: "What is their ID?",
            },

            {
                type: 'input',
                name: "internEmailAddress",
                message: "What is their email address?",
            },

            {
                type: 'input',
                name: "internSchool",
                message: "What is the name of their school?",
            },
        ])

        .then(function (response) {

            const intern = new Intern(
                res.internName,
                res.internID,
                res.internEmailAddress,
                res.internSchool);

            employeesArray.push(intern);

            if (res.internSchool !== "") {
                newEmployee();
            }
        })
}