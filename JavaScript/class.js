class Employee{
    // constructor(){
    //     this.id=101;
    //     this.empName='sarang';
    // } //no overloading allowed

    constructor(id,empName){
        this.id=id;
        this.empName=empName;
    }
    displayInfo(){
        console.log(this.id+' '+this.empName);
    }

}

const display=()=>{
    console.log("this is arrow function");
}

let emp=new Employee(1,'sarang');
emp.displayInfo();
display();

