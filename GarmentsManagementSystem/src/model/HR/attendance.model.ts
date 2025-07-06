import { Employee } from "./employee.model";

export class Attendance {

    id !: string;
    attDate !: string;
    status !: string;
   employee : Employee;

   constructor(id:string, attDate:string,status: string, employee: Employee){
    this.id = id;
    this.attDate = attDate ;
    this.status = status;
    this.employee = employee;

   }



}