import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Item } from '../../../model/Purchase/item.model';
import { InventoryModel } from '../../../model/Purchase/inventory.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InventoryService } from '../../service/Purchase/inventory-service';
import { ItemService } from '../../service/Purchase/item-service';
import { Router } from '@angular/router';
import { StockInModel } from '../../../model/Purchase/stockIn.model';

@Component({
  selector: 'app-stock-in',
  standalone: false,
  templateUrl: './stock-in.html',
  styleUrl: './stock-in.css'
})
export class StockIn implements OnInit {

  item: Item[] = [];
  inventory: InventoryModel[] = [];

  formStockIn!: FormGroup;

  constructor(
    private inventoryService: InventoryService,
    private itemService: ItemService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formStockIn = this.formBuilder.group({


      item: this.formBuilder.group({
        categoryName: [''],
      }),
      inventory: this.formBuilder.group({

        quantity: [''],
      })

    })
    this.loadInventory();
    this.loadItem();


    this.formStockIn.get('item')?.get('categoryName')?.valueChanges.subscribe(categoryName => {
      const selectedStatus = this.item.find(s => s.categoryName === categoryName);
      if (selectedStatus) {

        this.formStockIn.patchValue({ atten_status: selectedStatus });
      }
    });
  }


  addStockIn(): void {

    const stock: StockInModel = { ...this.formStockIn.value };
    this.inventoryService.saveStockIn(stock).subscribe({

      next: (inven) => {
        console.log(inven, 'add Successfully ! ');
        this.loadItem();
        this.loadInventory();
        this.formStockIn.reset();
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
