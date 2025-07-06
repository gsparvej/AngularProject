import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from '../../../model/HR/department.model';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';
import { Employee } from '../../../model/HR/employee.model';
import { Designation } from '../../../model/HR/designation.model';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee implements OnInit{

  departments: Department[] = [];
  designations: Designation[] = [];  // Filtered Designations

  formGroup!: FormGroup;

  constructor(
    private hrService: HrService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }




  // eta chatgpt

  // ngOnInit(): void {
  //  this.formGroup = this.formBuilder.group({
  //     name: [''],
  //     phoneNumber: [''],
  //     email: [''],
  //     joinDate: [''],
  //     departmentId: [''],     // Store only department ID
  //     designationId: ['']     // Store only designation ID
  //   });

  //   this.loadDepartment();

  //   this.formGroup.get('id')?.valueChanges.subscribe(deptId => {
  //     const selectedDept = this.departments.find(dep => dep.id === deptId);
  //     if (selectedDept) {
  //       this.designations = selectedDept.designations;   // Auto update designation list
  //       this.formGroup.get('id')?.reset();    // Reset designation
  //     } else {
  //       this.designations = [];
  //     }
  //   });
  // }

  // loadDepartment(): void {
  //   this.hrService.getAllDepartment().subscribe({
  //     next: (dep) => {
  //       this.departments = dep;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  // addEmp(): void {
  //   const emp: Employee = {
  //     name: this.formGroup.value.name,
  //     phoneNumber: this.formGroup.value.phoneNumber,
  //     email: this.formGroup.value.email,
  //     joinDate: this.formGroup.value.joinDate,
  //     department: this.departments.find(d => d.id === this.formGroup.value.id),
  //     designation: this.designations.find(d => d.id === this.formGroup.value.id)
  //   };

  //   this.hrService.saveEmployee(emp).subscribe({
  //     next: (employee) => {
  //       console.log(employee, 'added Successfully!');
  //       this.loadDepartment();
  //       this.formGroup.reset();
  //       this.router.navigate(['/viewAllEmp']);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }
  // }












  ngOnInit(): void {
     this.formGroup = this.formBuilder.group({

    
    name :[''],
    phoneNumber :[''],
    email : [''],
    joinDate : [''],
    department : this.formBuilder.group({

      name :[''],
    }),
    designation : this.formBuilder.group({

      designationTitle :[''],
    }),


   });

   this.loadDepartment();

   this.formGroup.get('department')?.get('name')?.valueChanges.subscribe(name => {
    const selectedDepartment = this.departments.find(dep => dep.name === name);
    if(selectedDepartment) {

      this.formGroup.patchValue({department: selectedDepartment});
    }
   });

    this.formGroup.get('designation')?.get('designationTitle')?.valueChanges.subscribe(designationTitle => {
    const selectedDepartment = this.designations.find(dep => dep.designationTitle === designationTitle);
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

