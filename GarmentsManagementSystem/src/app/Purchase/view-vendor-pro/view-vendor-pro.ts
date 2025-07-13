import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Vendor } from '../../../model/Purchase/vendor.model';
import { VendorService } from '../../service/Purchase/vendor-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-vendor-pro',
  standalone: false,
  templateUrl: './view-vendor-pro.html',
  styleUrl: './view-vendor-pro.css'
})
export class ViewVendorPro implements OnInit{

  id!: string;
  ven!: Vendor;
  vendor: Vendor[] = [];

   constructor(
    private vs: VendorService,

    private ar: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
   this.viewVendor();
  }

  viewVendor(): void {
    this.vs.viewVendorProfile(this.id).subscribe({
      next: (data) => {
        this.ven = data ;
        console.log(data);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
