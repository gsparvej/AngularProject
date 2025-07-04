import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from '../../../model/HR/department.model';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';
import { Employee } from '../../../model/HR/employee.model';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee implements OnInit{

  departments : Department[] = [];

  formGroup! : FormGroup;

  constructor(
private hrService : HrService,
private cdr : ChangeDetectorRef,
private router : Router,
private formBuilder : FormBuilder,
  ){}

  ngOnInit(): void {
     this.formGroup = this.formBuilder.group({

    
    name :[''],
    phoneNumber :[''],
    email : [''],
    joinDate : [''],
    department : this.formBuilder.group({

      name :[''],
      designationTitle  :['']


    })

   });

   this.loadDepartment();

   this.formGroup.get('department')?.get('name')?.valueChanges.subscribe(name => {
    const selectedDepartment = this.departments.find(dep => dep.name === name);
    if(selectedDepartment) {

      this.formGroup.patchValue({department: selectedDepartment});
    }
   });

    this.formGroup.get('department')?.get('name')?.valueChanges.subscribe(designationTitle => {
    const selectedDepartment = this.departments.find(dep => dep.designationTitle === designationTitle);
    if(selectedDepartment) {

      this.formGroup.patchValue({department: selectedDepartment});
    }
   });

  }


  loadDepartment(): void {

    this.hrService.getAllDepartment().subscribe({

      next: (dep) => {
        this.departments = dep;

      },
      error: (err) => {

        console.log(err);
      }

    });

  }

  addEmp(): void {

const emp : Employee = {...this.formGroup.value};
this.hrService.saveEmployee(emp).subscribe({

  next: (employee) => {
    console.log(employee,'added Successfully ! ');
    this.loadDepartment();
    this.formGroup.reset();
    this.router.navigate(['/viewAllEmp']);
  },
  error: (err) => {
    console.log(err);
  }


})


  }
}
