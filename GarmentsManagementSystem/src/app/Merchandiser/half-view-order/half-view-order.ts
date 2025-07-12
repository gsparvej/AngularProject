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

  order! : Order;

  orders: Order[ ] = [];
  boms: Bom[] = [];


  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router
  ){}

  ngOnInit(): void {
this.loadAllOrder();
   
  }

  loadAllOrder(){
       forkJoin({
  
    orders: this.merchandiserService.getAllOrder(),
    boms: this.merchandiserService.getAllBom(),
  
  }).subscribe({
    next: ({ orders, boms }) => {
      this.orders = orders;
      this.boms = boms;
      this.router.navigate(['/viewHalfOrder']);
    },
    error: (err) => {
      console.log('Error loading Data : ',err);
      alert('Failed to load employees or lookup data ');
  
    }
  });
  
  
    }


}
