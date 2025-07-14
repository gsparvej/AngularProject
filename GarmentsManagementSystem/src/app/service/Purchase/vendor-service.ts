import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../../../model/Purchase/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
baseUrlVendor: string = "http://localhost:3000/vendor";

  constructor(private http: HttpClient) { }


   getAllVendor(): Observable<any>{
    
        return this.http.get(this.baseUrlVendor);
    
      }
    
      saveVendor(ven: Vendor) : Observable<any> {
      
          return this.http.post(this.baseUrlVendor,ven);
        }

   viewVendorProfile(id: string): Observable<any> {
    return this.http.get(this.baseUrlVendor+'/'+id);
  }
  


}
