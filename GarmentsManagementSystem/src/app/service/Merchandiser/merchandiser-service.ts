import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../../../model/Merchandiser/buyer.model';
import { Uom } from '../../../model/Merchandiser/uom.model';

@Injectable({
  providedIn: 'root'
})
export class MerchandiserService {

   baseUrlBuyer: string = "http://localhost:3000/buyer";
   baseUrlUOM: string = "http://localhost:3000/uom";
   baseUrlCon: string = "http://localhost:3000/consumption";



  constructor(private http: HttpClient) { }


  // buyer add, update, delete ,view start
  getAllBuyer(): Observable<any>{
  
      return this.http.get(this.baseUrlBuyer);
  
    }
  
    saveBuyer(buy: Buyer) : Observable<any> {
    
        return this.http.post(this.baseUrlBuyer,buy);
      }



  // buyer add, update, delete ,view end 

  // UOM add, update , delete , view start

  getAllUom(): Observable<any>{
  
    return this.http.get(this.baseUrlUOM);
  }

 saveUom(uom: Uom) : Observable<any> {
    
    return this.http.post(this.baseUrlUOM,uom);
 }
 deleteUom(id: string): Observable<any> {

    return this.http.delete(this.baseUrlUOM+'/'+id);
  }

   getUomById(id: string): Observable<any> {

    return this.http.get(this.baseUrlUOM+'/'+id);
  }
   updateManagement(id: string, uom: Uom): Observable<any> {
  
     return this.http.put(this.baseUrlUOM+'/'+id,uom);
    }


  // UOM add, update , delete , view end

  getAllConsumption(): Observable<any>{
  
    return this.http.get(this.baseUrlCon);
  }


}
