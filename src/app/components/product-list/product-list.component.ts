import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]
  productAddedToCart:boolean = false;
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  //rxjs
  getProducts(){
   
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data;
    })
  }
  addToCart(product:Product){
    this.productAddedToCart=false;
    this.cartService.add({productId:product.id,userId:1,count:1,id:0}).
    subscribe(response =>{
      this.productAddedToCart=true;
    })
  }
}
