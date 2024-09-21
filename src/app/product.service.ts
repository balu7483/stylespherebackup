import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Model/Product';
import { Observable } from 'rxjs';
import { REMOVE_STYLES_ON_COMPONENT_DESTROY } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="http://localhost:8080/api/product"

  constructor(private http:HttpClient) { }


  public getProducts(){
     return this.http.get(`${this.baseUrl}/products`)
  }

  public addProduct(product:Product):Observable<any>{
    return this.http.post(`${this.baseUrl}/addProduct`,product)
  }
  
  public editProduct(id:number,product:Product):Observable<any>{
    return this.http.put(`${this.baseUrl}/productUpdate/${id}`,product,{responseType:'text'})
  }
}
