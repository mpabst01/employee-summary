// TODO: Write code to define and export the Employee class
export class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(`Name: ${this.name}`);
        return this.name;
    }
    getId(){
        console.log(`ID: ${this.id}`);
        return this.id;
    }
    getEmail(){
        console.log(`Email: ${this.email}`);
        return this.email;
    }
    getRole(){
        console.log("Employee");
        return "Employee";
    }
}

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();