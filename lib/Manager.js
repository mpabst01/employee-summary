// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
export class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
    getOfficeNumber(){
        console.log(`Office number: ${this.officeNumber}`);
    }
    getRole(){
        console.log("Manager");
    }
}

manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();