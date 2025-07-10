import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-full-bom-view',
  standalone: false,
  templateUrl: './view-full-bom-view.html',
  styleUrl: './view-full-bom-view.css'
})
export class ViewFullBomView implements OnInit{

  bomview: any;

  constructor(
    private merchandiserService: MerchandiserService,
    private router : Router,
    private cdr: ChangeDetectorRef
  ){}
  ngOnInit(): void {
    this.loadAllBomView();
  }
  loadAllBomView(){
    this.bomview = this.merchandiserService.getAllBomView();
  }

}
