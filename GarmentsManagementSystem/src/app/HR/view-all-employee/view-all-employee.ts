import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-employee',
  standalone: false,
  templateUrl: './view-all-employee.html',
  styleUrl: './view-all-employee.css'
})
export class ViewAllEmployee implements OnInit{

employees: any;

constructor(
private hrService: HrService,
private cdr: ChangeDetectorRef,
private router: Router


){}

  ngOnInit(): void {
    this.loadAllEmployee();
  }

  loadAllEmployee(){
this.employees = this.hrService.getAllEmployee();


  }


  getEmpById(id:string): void{

      this.hrService.getEmployeeById(id).subscribe({

      next: (res) => {

      console.log(res,"Id Get Successfully");
      this.router.navigate(['/updateEmployee',id]);    // ekhane kaj baki ase *** 

                    },
      error: (err) => {
      console.log(err);


  }


});


  
  }

deleteEmp(id: string ): void {

this.hrService.deleteEmployee(id).subscribe({

  next: (res) => {

    this.cdr.reattach();
    this.loadAllEmployee();
  },
  error: (err) => {
    console.log(err);
  }


})

  }


}
