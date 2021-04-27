import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { Cart } from '../modules/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiurl="https://localhost:44314/api/baskets/"
  
  constructor(private httpClient: HttpClient) { }
  
  add(cart:Cart):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiurl+"add",cart)
  }
  get():Observable<ListResponseModel<Cart>>{
    return this.httpClient.get<ListResponseModel<Cart>>(this.apiurl+"getbasket");
  }
}

