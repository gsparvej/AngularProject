import { Component, OnInit } from '@angular/core';
import { Bom } from '../../../model/Merchandiser/bom.model';
import { OrderStatus } from '../../../model/Merchandiser/orderStatus.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { Order } from '../../../model/Merchandiser/order.model';

@Component({
  selector: 'app-create-order',
  standalone: false,
  templateUrl: './create-order.html',
  styleUrl: './create-order.css'
})
export class CreateOrder implements OnInit{
styleCode: Bom[] = [];
  status: OrderStatus[] = [];

  orderForm!: FormGroup;

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // ✅ Reactive Form Structure
    this.orderForm = this.formBuilder.group({
      buyerOrganization: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      orderDate: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      smallSize: [0],
      sPrice: [0],
      mediumSize: [0],
      mPrice: [0],
      largeSize: [0],
      lPrice: [0],
      subTotal: [0],
      vat: [0],
      paidAmount: [0],
      dueAmount: [0],
      total: [0],
      remarks: [''],

      bom: this.formBuilder.group({
        styleCode: ['', Validators.required]
      }),

      orderStatus: this.formBuilder.group({
        status: ['', Validators.required]
      })
    });

    // ✅ Subscribe for Style Code Changes
    this.orderForm.get('bom')?.get('styleCode')?.valueChanges.subscribe(styleCode => {
      const selectedDescription = this.styleCode.find(b => b.styleCode === styleCode);
      if (selectedDescription) {
        this.orderForm.patchValue({ bom: selectedDescription });
      }
    });

    // ✅ Subscribe for Order Status Changes
    this.orderForm.get('orderStatus')?.get('status')?.valueChanges.subscribe(statusValue => {
      const selectedStatus = this.status.find(s => s.status === statusValue);
      if (selectedStatus) {
        this.orderForm.patchValue({ orderStatus: selectedStatus });
      }
    });

    // ✅ Load Initial Data
    this.loadOrderStatus();
    this.loadStyle();
  }

  // ✅ Add Order Method
  addOrder(): void {
    if (this.orderForm.invalid) {
      console.log('Form Invalid');
      return;
    }

    const order: Order = { ...this.orderForm.value };

    this.merchandiserService.saveOder(order).subscribe({
      next: (savedOrder) => {
        console.log(savedOrder, 'Order Successfully Saved!');
        this.loadOrderStatus();
        this.loadStyle();
        this.orderForm.reset();
        this.router.navigate(['']);  // ✅ Redirect after save
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // ✅ Load Order Status List
  loadOrderStatus(): void {
    this.merchandiserService.getAllOrderStatus().subscribe({
      next: (statusList) => {
        this.status = statusList;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // ✅ Load BOM Styles List
  loadStyle(): void {
    this.merchandiserService.getAllBom().subscribe({
      next: (styleList) => {
        this.styleCode = styleList;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
