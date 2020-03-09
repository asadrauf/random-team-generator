/* Defining an Enginner Class which will inherit  properties and methods
from its parent Class Employee */
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){

        //super will inherit all properties and methods of the parent class
        super(name, id, email);
        this.github = github;
    }

    //overriding getRole of parent class with Class Enginner Role class
    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }


}

//exporting this Class Module so its available for requiring in other classes

module.exports = Engineer;