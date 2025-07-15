import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../../../model/Purchase/inventory.model';
import { AddInventoryProduct } from '../../../model/Purchase/addInventoryProduct.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseUrlInventory: string = "http://localhost:3000/inventoryView";
  baseUrlAddInvenProduct: string = "http://localhost:3000/addProduct";

  constructor(private http: HttpClient) { }




   getAllInventory(): Observable<any>{
    
    return this.http.get(this.baseUrlInventory);
    
  }
    
  saveInventory(inevn: Inventory) : Observable<any> {
      
  return this.http.post(this.baseUrlInventory,inevn);
  }



  getAllAddProduct(): Observable<any>{
    
    return this.http.get(this.baseUrlAddInvenProduct);
    
  }
    
  saveProduct(product: AddInventoryProduct) : Observable<any> {
      
  return this.http.post(this.baseUrlAddInvenProduct,product);
  }
}
