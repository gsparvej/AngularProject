import { Employee } from "./employee.model";

export class Leave {

    id !: string;
    leaveType !: string;
    fromDate !: string;
    toDate !: string;
    status !: string;
    employee : Employee;
    
    constructor(id: string, leaveType: string, fromDate: string, toDate: string, status: string, employee: Employee){

        this.id = id;
        this.leaveType = leaveType;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.status = status;
        this.employee = employee;
    }



}