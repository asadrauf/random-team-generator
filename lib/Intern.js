/* Defining an Intern Class which will inherit  properties and methods
from its parent Class Employee */
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    //overriding getRole of parent class with Class Intern Role class
    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school
    }
    
}

//exporting this Class Module so its available for requiring in other classes
module.exports = Intern;