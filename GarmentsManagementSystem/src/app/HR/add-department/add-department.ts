import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';
import { Department } from '../../../model/HR/department.model';

@Component({
  selector: 'app-add-department',
  standalone: false,
  templateUrl: './add-department.html',
  styleUrl: './add-department.css'
})
export class AddDepartment implements OnInit{

  formGroup! : FormGroup;

  constructor(
    private hrService: HrService,
    private router : Router,
    private formBuilder : FormBuilder,

  ){}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

      name :[''],
      designationTitle :[''] // ekhane eta hbe na , eita ektu kheyal korte hbe 


    });
  }


  addDepartment(): void {
    const department : Department = {...this.formGroup.value};
    this.hrService.saveDepartment(department).subscribe({
  
      next: (res) => {
  
        console.log(res,'Added Succesfully');
        this.formGroup.reset();
        this.router.navigate(['/viewAllDepart']);
  
      },
      error: (err) => {
        console.log(err,'Data Not Saved ! Please Check Console')
  
      }
  
  
  
    });
  
  
  
    }

}
