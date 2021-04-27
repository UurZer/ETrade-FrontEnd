import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../modules/product';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl="https://localhost:44314/api/products/"
  constructor(private httpClient:HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>>{

    return this.httpClient.get<ListResponseModel<Product>>(this.apiurl+"getall");
     
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{

    return this.httpClient.get<ListResponseModel<Product>>(this.apiurl+"getbycategory?categoryId="+categoryId);
     
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiurl+"add",product);
  }
}
