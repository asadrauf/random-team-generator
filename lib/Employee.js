//Creating an Employee Class 

class Employee {
    //Creating an constructor and passing parameters in it 
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //below we are creating a methods that will return properties of this class
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;