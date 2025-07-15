import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Item } from '../../../model/Purchase/item.model';
import { InventoryModel } from '../../../model/Purchase/inventory.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InventoryService } from '../../service/Purchase/inventory-service';
import { ItemService } from '../../service/Purchase/item-service';
import { Router } from '@angular/router';
import { StockInModel } from '../../../model/Purchase/stockIn.model';

@Component({
  selector: 'app-stock-out',
  standalone: false,
  templateUrl: './stock-out.html',
  styleUrl: './stock-out.css'
})
export class StockOut implements OnInit {


  item: Item[] = [];
  inventory: InventoryModel[] = [];

  formStockOut!: FormGroup;

  constructor(
    private inventoryService: InventoryService,
    private itemService: ItemService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formStockOut = this.formBuilder.group({


      item: this.formBuilder.group({
        categoryName: [''],
      }),
      inventory: this.formBuilder.group({

        quantity: [''],
      })

    })
    this.loadInventory();
    this.loadItem();


    this.formStockOut.get('item')?.get('categoryName')?.valueChanges.subscribe(categoryName => {
      const selectedStatus = this.item.find(s => s.categoryName === categoryName);
      if (selectedStatus) {

        this.formStockOut.patchValue({ atten_status: selectedStatus });
      }
    });
  }


  addStockOut(): void {

    const stock: StockInModel = { ...this.formStockOut.value };
    this.inventoryService.saveStockIn(stock).subscribe({

      next: (inven) => {
        console.log(inven, 'add Successfully ! ');
        this.loadItem();
        this.loadInventory();
        this.formStockOut.reset();
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
        this.cdr.markForCheck();

      },
      error: (err) => {

        console.log(err);
      }

    });

  }


  loadInventory(): void {

    this.inventoryService.getInventories().subscribe({

      next: (inven) => {
        this.inventory = inven;

      },
      error: (err) => {

        console.log(err);
      }

    });

  }


}
