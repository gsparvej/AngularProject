import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Item } from '../../../model/Purchase/item.model';
import { Inventory } from '../../../model/Purchase/inventory.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InventoryService } from '../../service/Purchase/inventory-service';
import { Router } from '@angular/router';
import { ItemService } from '../../service/Purchase/item-service';
import { AddInventoryProduct } from '../../../model/Purchase/addInventoryProduct.model';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct implements OnInit {


  item: Item[] = [];
  inventory: Inventory[]= [];

  formAddProduct!: FormGroup;

  constructor(
    private inventoryService: InventoryService,
    private itemService: ItemService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
     this.formAddProduct = this.formBuilder.group({


      item: this.formBuilder.group({
        categoryName : [''],
      }),
      inventory : this.formBuilder.group({

        quantity:[''],
      })

     })
     this.loadInventory();
     this.loadItem();


      this.formAddProduct.get('item')?.get('categoryName')?.valueChanges.subscribe(categoryName => {
    const selectedStatus= this.item.find(s => s.categoryName === categoryName);
    if(selectedStatus) {

      this.formAddProduct.patchValue({atten_status: selectedStatus});
    }
   });
  }


  addProduct(): void {
  
  const pro : AddInventoryProduct = {...this.formAddProduct.value};
  this.inventoryService.saveProduct(pro).subscribe({
  
    next: (product) => {
      console.log(product,'add Successfully ! ');
      this.loadItem();
      this.loadInventory();
      this.formAddProduct.reset();
      this.router.navigate(['']);
    },
    error: (err) => {
      console.log(err);
    }
  
  
  })
  
  
    }


  loadItem(): void {

    this.itemService.getAllItem().subscribe({

      next: (item) => {
        this.item = item;

      },
      error: (err) => {

        console.log(err);
      }

    });

  }


  loadInventory(): void {

    this.inventoryService.getAllInventory().subscribe({

      next: (inven) => {
        this.inventory = inven;

      },
      error: (err) => {

        console.log(err);
      }

    });

  }

}
