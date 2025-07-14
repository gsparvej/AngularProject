import { Component, OnInit } from '@angular/core';
import { Order } from '../../../model/Merchandiser/order.model';
import { Bom } from '../../../model/Merchandiser/bom.model';
import { OrderStatus } from '../../../model/Merchandiser/orderStatus.model';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-half-view-order',
  standalone: false,
  templateUrl: './half-view-order.html',
  styleUrl: './half-view-order.css'
})
export class HalfViewOrder implements OnInit{

   orders: Order[] = [];
 

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders(): void {
   
      orders: this.merchandiserService.getAllOrder().subscribe({
      next: (result) => {
        this.orders = result;     

        console.log('Orders:', this.orders);


        // ⚠️ Don't navigate here unless needed
        // this.router.navigate(['/viewHalfOrder']);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        alert('Failed to load orders or BOM data');
      }
    });
  }

  getOrderById(id: string): void {
    this.router.navigate(['/fullOrderView', id]);
  }


}
