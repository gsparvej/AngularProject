import { Component, OnInit } from '@angular/core';
import { Bom } from '../../../model/Merchandiser/bom.model';
import { Uom } from '../../../model/Merchandiser/uom.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { Bomview } from '../../../model/Merchandiser/bomview.model';

@Component({
  selector: 'app-add-bom-view',
  standalone: false,
  templateUrl: './add-bom-view.html',
  styleUrl: './add-bom-view.css'
})
export class AddBomView implements OnInit{

  serial!: number;
  material!: string;
  element!: string;
  quantity!:number;
  unitPrice!:number;
  totalCost!:number;

  bom: Bom[] = [];
  uom: Uom[]= [];

  formBomView!: FormGroup;

   constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.formBomView = this.formBuilder.group({
      serial: [''],
      material:[''],
      element: [''],
      quantity: [''],
      unitPrice: [''],
      totalCost:[''],
      uom: this.formBuilder.group({
        result : [''],
      }),
      bom: this.formBuilder.group({
        styleCode : [''],
        description: ['']

      })



    });

    this.loadBomBom();
    this.loadUom();



    // eituk code use kori ni , ***

  //   this.formBomView.get('bom')?.get('styleCode')?.valueChanges.subscribe(styleCode => {
  //   const selectedStyleCode = this.bom.find(b => b.styleCode === styleCode);
  //   if(selectedStyleCode) {

  //     this.formBomView.patchValue({bom: selectedStyleCode});
  //   }
  //  });

  //   this.formBomView.get('bom')?.get('description')?.valueChanges.subscribe(description => {
  //   const selectedDescription = this.bom.find(b => b.description === description);
  //   if(selectedDescription) {

  //     this.formBomView.patchValue({bom: selectedDescription});
  //   }
  //  });




   this.formBomView.get('uom')?.get('result')?.valueChanges.subscribe(result => {
    const selectedStatus= this.uom.find(s => s.result === result);
    if(selectedStatus) {

      this.formBomView.patchValue({atten_status: selectedStatus});
    }
   });
  }

   addBomBomView(): void {
  
  const bomview : Bomview = {...this.formBomView.value};
  this.merchandiserService.saveBomView(bomview).subscribe({
  
    next: (bomview) => {
      console.log(bomview,'bomview Successfully ! ');
      this.loadBomBom();
      this.loadUom();
      this.formBomView.reset();
      this.router.navigate(['']);
    },
    error: (err) => {
      console.log(err);
    }
  
  
  })
  
  
    }


  loadBomBom(): void {

    this.merchandiserService.getAllBom().subscribe({

      next: (bom) => {
        this.bom = bom;

      },
      error: (err) => {

        console.log(err);
      }

    });

  }

  loadUom(): void {

    this.merchandiserService.getAllUom().subscribe({

      next: (s) => {
        this.uom = s;

      },
      error: (err) => {

        console.log(err);
      }

    });

  }
  totalCostingPerRow(): void {

  //   this.formBomView.get('uom')?.get('result')?.valueChanges.subscribe(result => {
  //   const selectedStatus= this.uom.find(s => s.result === result);
  //   if(selectedStatus) {
  //     this.formBomView.patchValue({temp: selectedStatus});
      
  //   }
  //  });

  this.quantity = this.formBomView.value.quantity;
  this.unitPrice = this.formBomView.value.unitPrice;

  this.totalCost = this.quantity * this.unitPrice ;
    
  }
  onFocusLost(){
    this.totalCostingPerRow();
  }

}
