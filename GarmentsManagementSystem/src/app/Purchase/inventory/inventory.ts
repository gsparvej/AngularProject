import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../service/Purchase/inventory-service';
import { InventoryModel } from '../../../model/Purchase/inventory.model';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})
export class Inventory implements OnInit {

  inventoryForm!: FormGroup;
  inventories!: any;

  constructor(private fb: FormBuilder, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryForm = this.fb.group({
      quantity: [0, [Validators.required, Validators.min(1)]],
      receivedTransactionDate: ['', Validators.required],
      item: ['', Validators.required],
    });

    this.loadInventories();
  }

  loadInventories(): void {
    this.inventoryService.getInventories().subscribe((data) => {
      this.inventories = data;
    });
  }

  onSubmit(): void {
    if (this.inventoryForm.valid) {
      const inventory: InventoryModel = {
        ...this.inventoryForm.value
      };

      this.inventoryService.saveInventory(inventory).subscribe(() => {
        this.inventoryForm.reset();
        this.loadInventories();
      });
    }
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this inventory record?')) {
      this.inventoryService.deleteInventory(id).subscribe(() => {
        this.loadInventories();
      });
    }
  }

}
