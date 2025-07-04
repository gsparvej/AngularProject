import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../../model/HR/employee.model';
import { Department } from '../../../model/HR/department.model';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  baseUrlEmp: string = "http://localhost:3000/employees";
  baseUrlDepart: string = "http://localhost:3000/department";
  baseUrlAtten: string = "http://localhost:3000/attendance";
  baseUrlLeave: string = "http://localhost:3000/leave";
  baseUrlPay: string = "http://localhost:3000/payroll";


  constructor(private http: HttpClient) { }


// Employee add, delete, Update start

getAllEmployee(): Observable<any>{

    return this.http.get(this.baseUrlEmp);

  }

deleteEmployee(id: string): Observable<any> {

    return this.http.delete(this.baseUrlEmp+'/'+id);
  }

saveEmployee(emp: Employee) : Observable<any> {

    return this.http.post(this.baseUrlEmp,emp);
  }

  getEmployeeById(id: string): Observable<any> {

    return this.http.get(this.baseUrlEmp+'/'+id);
  }
  updateManagement(id: string, emp: Employee): Observable<any> {

   return this.http.put(this.baseUrlEmp+'/'+id,emp);
  }


  // Employee add, delete, Update end



  // Department and Designation add, delete , update start

  getAllDepartment(): Observable<any>{

    return this.http.get(this.baseUrlDepart);

  }

  deleteDepartment(id: string): Observable<any> {

    return this.http.delete(this.baseUrlDepart+'/'+id);
  }

saveDepartment(dep: Department) : Observable<any> {

    return this.http.post(this.baseUrlDepart,dep);
  }

  getDepartmentById(id: string): Observable<any> {

    return this.http.get(this.baseUrlDepart+'/'+id);
  }
  updateDepartment(id: string, dep: Department): Observable<any> {

   return this.http.put(this.baseUrlDepart+'/'+id,dep);
  }

// Department and Designation add, delete , update start


}
