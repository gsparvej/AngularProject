import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InventoryModel } from '../../../model/Purchase/inventory.model';
import { Item } from '../../../model/Purchase/item.model';
import { StockInModel } from '../../../model/Purchase/stockIn.model';

import { InventoryService } from '../../service/Purchase/inventory-service';
import { ItemService } from '../../service/Purchase/item-service';

@Component({
  selector: 'app-stock-in',
  standalone: false,
  templateUrl: './stock-in.html',
  styleUrl: './stock-in.css'
})
export class StockIn implements OnInit {

  inventory: InventoryModel[] = [];

  formStockIn!: FormGroup;

  selectedItem!: any;

  constructor(
    private inventoryService: InventoryService,
    private itemService: ItemService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formStockIn = this.formBuilder.group({
      itemId: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      receivedTransactionDate: [this.getTodayDate(), Validators.required]
    });

    this.loadItems();
    this.loadInventory();
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
  }

  addStockIn(): void {
    if (this.formStockIn.invalid) {
      this.formStockIn.markAllAsTouched();
      return;
    }

    const stock: StockInModel = {
      ...this.formStockIn.value
    };

    this.inventoryService.saveStockIn(stock).subscribe({
      next: (inven) => {
        console.log(inven);
        const id = this.formStockIn.value.itemId;
        const quantity = this.formStockIn.value.quantity + this.selectedItem?.quantity;
        const categoryName = this.selectedItem.categoryName;
        const invent = new InventoryModel(quantity, categoryName);
        this.updateInventory(id, invent);
        console.log(inven, 'Added Successfully!');
        this.loadItems();
        this.loadInventory();
        this.formStockIn.reset({ receivedTransactionDate: this.getTodayDate() });
        this.router.navigate(['']); // Adjust as needed
      },
      error: (err) => {
        console.error('Error adding stock:', err);
      }
    });
  }

  loadItems(): void {
    this.inventoryService.getInventories().subscribe({
      next: (data) => this.inventory = data,
      error: (err) => console.error('Error loading items:', err)
    });
  }

  loadInventory(): void {
    this.inventoryService.getInventories().subscribe({
      next: (data) => this.inventory = data,
      error: (err) => console.error('Error loading inventory:', err)
    });
  }

  getItemName(itemId: string): string {
    const found = this.inventory.find(i => i.id === itemId);
    return found ? found.categoryName : 'Unknown';
  }

  updateInventory(id:string, invernt: InventoryModel) {
    this.inventoryService.updateQuantity(id, invernt);
  }


  onItemSelect(event: any): void {
    const selectedId = event.target.value;
    this.selectedItem = this.inventory.find(i => i.id === selectedId);
    console.log('Selected Item:', this.selectedItem);
  }

}
