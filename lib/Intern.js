// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
export class Intern {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool(){
        console.log(`School: ${this.school}`);
    }
    getRole(){
        console.log("Intern");
    }
}

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();