import { Component, OnInit } from '@angular/core';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';

@Component({
  selector: 'app-view-all-bom',
  standalone: false,
  templateUrl: './view-all-bom.html',
  styleUrl: './view-all-bom.css'
})
export class ViewAllBom implements OnInit{
  bom: any;

  constructor(
    private merchandiserService: MerchandiserService
  ){}
  ngOnInit(): void {
    this.loadAllBom();
  }
  loadAllBom(){
    this.bom = this.merchandiserService.getAllBom();
  }

}
