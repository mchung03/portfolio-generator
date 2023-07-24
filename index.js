const inquirer = require("inquirer");
const generatePortfolio = require("./generateportfolio");
const fs = require("fs");

const questions =[
    {
        type: "input",
        name: "name",
        message:"What is your name?",
    },
    {
        type: "input",
        name: "location",
        message:"Where are you from?",
    },
    {
        type: "input",
        name: "bio",
        message:"Write a short bio describing yourself and the work you do.",
    },
    {
        type: "input",
        name: "linkedin",
        message:"What is your LinkedIn URL?",
    },
    {
        type: "input",
        name: "github",
        message:"What is your Github URL?",
    },
]

function init (){
    inquirer 
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
        let portfolio = generatePortfolio(answers)
        fs.writeFile('index.html', portfolio, (err) => {
            if(err) throw err;
            console.log("The file has been created")
        })
    })
    .catch((error) => {
        console.log(error)
    })
}

init()