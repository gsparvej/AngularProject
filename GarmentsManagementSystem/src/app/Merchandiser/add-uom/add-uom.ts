import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { Uom } from '../../../model/Merchandiser/uom.model';
import { Consumption } from '../../../model/Merchandiser/consumption.model';

@Component({
  selector: 'app-add-uom',
  standalone: false,
  templateUrl: './add-uom.html',
  styleUrl: './add-uom.css'
})
export class AddUom implements OnInit{

   body!: number;     
  sleeve!: number;       
  pocket!: number;     
  wastage !: number; 
  shrinkage!: number;
  result ! : number;

  consumptions: Consumption[] = [];
  formUom !: FormGroup;

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {
     this.merchandiserService.getAllConsumption().subscribe(data => this.consumptions = data);
   
  }

  addUom():void {
    const uom : Uom = {...this.formUom.value};
    this.merchandiserService.saveUom(uom).subscribe({

      next: (uom) => {
        console.log('UOM added succesfully!',uom);
        this.formUom.reset();
        this.router.navigate(['/viewAllUom']);
      },
      error:( err) => {
        console.log(err);
        
      }
    });
  }

//   calculateConsumption() {

//  const baseFabric = this.body+ this.sleeve+ this.pocket;
//  const loss = this.wastage + this.shrinkage;
//  const allowance = baseFabric*(loss*0.01);
//  const totalConsumption = baseFabric+ allowance;
//  return totalConsumption;
// }

baseFabric(): void {

  this.result= this.body+ this.pocket + this.sleeve;
}
totalLossFabric(): void{
  this.result = this.wastage+ this.shrinkage;
}
// totalAllowance(): void<any> {
//   this.result = this.baseFabric() + (this.baseFabric() * (this.totalLossFabric() / 100));
// }

totalConsumption(): void {
  this.result = (this.body+ this.pocket + this.sleeve) + 
  ((this.body+ this.pocket + this.sleeve)*(( this.wastage + this.shrinkage) / 100))
}

}
