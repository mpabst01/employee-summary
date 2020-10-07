// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
export class Engineer {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGithub(){
        console.log(`Github: ${this.github}`);
    }
    getRole(){
        console.log("Engineer");
    }
}

engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();