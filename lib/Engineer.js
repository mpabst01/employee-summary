// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
export class Engineer {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
        ;
    }
    getName(){
        console.log(`Name: ${this.name}`);
    }
    getId(){
        console.log(`ID: ${this.id}`);
    }
    getEmail(){
        console.log(`Email: ${this.email}`);
    }
    getRole(){
        console.log("Engineer");
    }
}

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();