const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//directory path where our html file exists
const OUTPUT_DIR = path.resolve(__dirname, "output")

//path to our html file where we will dump our html
const outputPath = path.join(OUTPUT_DIR, "team.html");

//requiring htmlRender.js which we will call with employee objects parameters 
const render = require("./lib/htmlRenderer");

//Initializing our employee array and set it to empty
const employee = [];


//function that will write into team.html and generate our html file
function generateHTML(){
    // If the build directory does not exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    // Build "build" directory
    fs.mkdirSync(OUTPUT_DIR);
  }else{
  
    fs.writeFileSync(outputPath, render(employee), "utf-8")
  }
}

//getInfo function will interact with user and ask question related to generate the developer team
function getInfo(){
    
    inquirer.prompt([
        {
          type: "list",
          name: "Options",
          message: "Which type of team member would you like to add?",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Generate Team Profile and exit the application"
            
          ]
        }
       
        //based on user option we will run switch statements which will call the desired function
      ]).then(selectedChoice => {
        switch(selectedChoice.Options) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
          case "Manager":
              addManager();
              break;
        default:
          generateHTML();
          console.log("Check out generated team.html file")
        }
      });
      
}

//addManager to the team function
function addManager(){
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is your manager's id?",
    },
    {
        
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
    }

//pushing manager data to employee array
]).then(answers => {
    var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
    employee.push(manager);
    getInfo();
    
})
}

//addEngineer to the team function
function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
      
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
        
      }

      //pushing engineer data to employee array
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      employee.push(engineer);
      
      getInfo();
    });
  }

  //addIntern to the team function
  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
        
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
        
      }

       //pushing intern data to employee array
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      employee.push(intern);
      
      getInfo();
    });
  }

  getInfo();