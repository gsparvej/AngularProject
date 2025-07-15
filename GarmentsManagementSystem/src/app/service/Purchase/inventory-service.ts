import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryModel } from '../../../model/Purchase/inventory.model';
import { StockIn } from '../../Purchase/stock-in/stock-in';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseUrlInventory: string = "http://localhost:3000/inventories";
  baseUrlAddInvenProduct: string = "http://localhost:3000/addProduct";

  constructor(private http: HttpClient) { }




  getAllInventory(): Observable<any> {

    return this.http.get(this.baseUrlInventory);

  }

  saveInventory(inevn: InventoryModel): Observable<any> {

    return this.http.post(this.baseUrlInventory, inevn);
  }



  getAllAddProduct(): Observable<any> {

    return this.http.get(this.baseUrlAddInvenProduct);

  }

  saveProduct(product: StockIn): Observable<any> {

    return this.http.post(this.baseUrlAddInvenProduct, product);
  }

  saveInventories(data: InventoryModel): Observable<InventoryModel> {
    return this.http.post<InventoryModel>(this.baseUrlInventory, data);
  }

  getInventories(): Observable<InventoryModel[]> {
    return this.http.get<InventoryModel[]>(this.baseUrlInventory);
  }

  deleteInventory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlInventory}/${id}`);
  }
}
