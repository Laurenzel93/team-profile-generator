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
                response.managerName,
                response.managerID,
                response.managerEmail,
                response.ManagerNumber);

            employeesArray.push(manager);

            if (response.ManagerNumber !== "") {
                newEmployee();
            }
        })
}

managerQuestions();


function newEmployee() {
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
        if (response.employees === "Engineer") {
            engineerQuestions();
        } else if (response.employees === "Intern") {
            internQuestions();
        } else {
            create();
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
                response.engineerName,
                response.engineerID,
                response.engineerEmailAddress,
                response.engineerGitHub);

            employeesArray.push(engineer);

            if (response.engineerGitHub !== "") {
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
                response.internName,
                response.internID,
                response.internEmailAddress,
                response.internSchool);

            employeesArray.push(intern);

            if (response.internSchool !== "") {
                newEmployee();
            }
        })
}


// Creates HTML page

function create() {
    let profilesArray = [];

    let header = `
    <!DOCTYPE html>
    <html lang="en">
    
    <header>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Team Profiles</title>
    </header>
    
    <body>
        <div class="jumbotron font-weight-bold text-center">
            <h1>TEAM PROFILES</h1>
        </div>
    
        <div class="container justify-content-center">
    
            <div class="d-flex flex-wrap justify-content-center"> `

    newFile.push(header);

    for (let i = 0; i < employeesArray.length; i++) {

        // Because no other employees have the property officeNumber, this can be used to identify the manager
        // Using a template literal, the cards array innerHTML is updated to reflect HTML unique to the manager

        if (employeesArray[i].officeNumber) {

            profilesArray.innerHTML =
                `            <div class="card text-center ml-4 mr-4 mb-5 border-dark">
                <div class="card-body bg-danger text-light">
                    <h4 class="card-header">Name: ${employeesArray[i].name}</h4>
                    <h4 class="card-title">${employeesArray[i].getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeesArray[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employeesArray[i].email}">${employeesArray[i].email}</a></li>
                    <li class="list-group-item">Phone Number: ${employeesArray[i].officeNumber}</li>
                </ul>
            </div>`

        } else if (employeesArray[i].github) {

            profilesArray.innerHTML +=
                `
        <div class="card text-center ml-4 mr-4 mb-5 border-dark">
        <div class="card-body bg-info text-light">
            <h4 class="card-header">${employeesArray[i].name}</h4>
            <h4 class="card-title">${employeesArray[i].getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employeesArray[i].id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employeesArray[i].email}">${employeesArray[i].email}</a></li>
        <li class="list-group-item"><a href="${employeesArray[i].getGithub()}" target= "_blank">GitHub</a></li>
        </ul>
    </div>
    `

        } else if (employeesArray[i].school) {

            profilesArray.innerHTML +=
                `
        <div class="card text-center ml-4 mr-4 mb-5 border-dark">
        <div class="card-body bg-warning text-light">
        <h4 class="card-header">${employeesArray[i].name}</h4>
        <h4 class="card-title">${employeesArray[i].getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employeesArray[i].id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employeesArray[i].email}">${employeesArray[i].email}</a></li>
        <li class="list-group-item">School: ${employeesArray[i].school}</li>
        </ul>
    </div>
        `

        }
    }
    newFile.push(profilesArray.innerHTML);

    // The closing HTML is consistent no matter how the user responds

    let bottomHTML =
        `
        </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        </body>
        </html>
        `

    newFile.push(bottomHTML);

    fs.writeFile("./dist/team.html", newFile.join(""), function (err) {
        err ? console.error(err) : console.log('Thank you! Your team has been generated!')
    })
}
