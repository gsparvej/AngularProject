import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../../model/Purchase/vendor.model';
import { VendorService } from '../../service/Purchase/vendor-service';

@Component({
  selector: 'app-view-all-vendor',
  standalone: false,
  templateUrl: './view-all-vendor.html',
  styleUrl: './view-all-vendor.css'
})
export class ViewAllVendor implements OnInit{

  vendor!: any;

  constructor(
    private vs: VendorService
  ){}

  ngOnInit(): void {
    this.loadAllVendor();
  }

  loadAllVendor(){
this.vendor = this.vs.getAllVendor();


  }

}
