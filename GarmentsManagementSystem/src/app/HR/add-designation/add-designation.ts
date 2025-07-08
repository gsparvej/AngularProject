import { Component, OnInit } from '@angular/core';
import { Designation } from '../../../model/HR/designation.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from '../../service/HR/hr-service';

@Component({
  selector: 'app-add-designation',
  standalone: false,
  templateUrl: './add-designation.html',
  styleUrl: './add-designation.css'
})
export class AddDesignation implements OnInit{

  designations: Designation[] = [];
  desigForm!: FormGroup;
  editing : boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private hrService: HrService
  ){
    this.desigForm = this.formBuilder.group({

      id: [''],
      designationTitle: ['',Validators.required]
    });
  }


  
  ngOnInit(): void {
    this.loadDesignation();
  }

  loadDesignation(){
    this.hrService.getAllDesignation().subscribe(data =>{
      this.designations = data;
    });
  }

  onSubmit(){
    if(this.desigForm.invalid) return;

    if(this.editing){
      this.hrService.updateDesignation(this.desigForm.value).subscribe(() => {
        alert('Updated Successfully!');
        this.loadDesignation();
        this.cancelEdit();
      });
    }
    else{
      const {designationTitle} = this.desigForm.value;
      this.hrService.saveDesignation({ designationTitle }).subscribe(() => {
        alert('Saaved Successfully!');
        this.loadDesignation();
        this.desigForm.reset();
        this.editing = false;


      })
    }



  }

  cancelEdit() {
    this.editing = false;
    this.desigForm.reset();
  }

}
