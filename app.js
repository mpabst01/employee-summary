const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
const render = require('./lib/htmlRenderer');
const teamMembers = [];
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
function buildTeam() {
    prompt([{
        type: 'list',
        name: 'direction',
        message: 'Would you like to add an employee?',
        choices: ['Engineer', 'Manager', 'Intern', 'Done'],
    }, ]).then(function(res) {
        switch (res.direction) {
            case 'Engineer':
                askEngineer();
                break;
            case 'Manager':
                askManager();
                break;
            case 'Intern':
                askIntern();
                break;
            case 'Done':
                console.log("Your team roster is complete!");    
            default:
                createTeam();
        }
    });
}
function askManager() {
    prompt([{
            type: 'input',
            name: 'managerName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
    ]).then(function(answer) {
        const manager = new Manager(
            answer.managerName,
            answer.managerId,
            answer.email,
            answer.officeNumber
        );
        teamMembers.push(manager);
        buildTeam();
    });
}

function askEngineer() {
    prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub?',
        },
    ]).then(function(answer) {
        const engineer = new Engineer(
            answer.engineerName,
            answer.engineerId,
            answer.email,
            answer.GitHub,
        );
        teamMembers.push(engineer);
        buildTeam();
    });
}

function askIntern() {
    prompt([{
            type: 'input',
            name: 'internName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?',
        },
    ]).then(function(answer) {
        const intern = new Intern(
            answer.internName,
            answer.internId,
            answer.email,
            answer.school,
        );
        teamMembers.push(intern);
        buildTeam();
    });
}
function createTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)

    }
    fs.writeFileSync(outputPath, render(teamMembers), "UTF8");
}
askManager();