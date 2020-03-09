/* Defining an Manager Class which will inherit  properties and methods
from its parent Class Employee */
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        //super will inherit all properties and methods of the parent class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //overriding getRole of parent class with Class Enginner Role class
    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }


}

//exporting this Class Module so its available for requiring in other classes

module.exports = Manager;