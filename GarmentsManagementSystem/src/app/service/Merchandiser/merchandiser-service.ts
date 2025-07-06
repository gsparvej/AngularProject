import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../../../model/Merchandiser/buyer.model';

@Injectable({
  providedIn: 'root'
})
export class MerchandiserService {

   baseUrlBuyer: string = "http://localhost:3000/buyer";



  constructor(private http: HttpClient) { }


  // buyer add, update, delete ,view start
  getAllBuyer(): Observable<any>{
  
      return this.http.get(this.baseUrlBuyer);
  
    }
  
    saveBuyer(buy: Buyer) : Observable<any> {
    
        return this.http.post(this.baseUrlBuyer,buy);
      }



  // buyer add, update, delete ,view end 
}
