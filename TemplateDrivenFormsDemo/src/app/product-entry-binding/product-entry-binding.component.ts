import { Component, OnInit } from '@angular/core';
import { Product } from '../product-entry/product-model';
@Component({
  selector: 'app-product-entry-binding',
  templateUrl: './product-entry-binding.component.html',
  styleUrls: ['./product-entry-binding.component.css']
})
export class ProductEntryBindingComponent implements OnInit {

  product: Product = new Product()

  constructor() { }

  ngOnInit() {
    this.product.code = "P101";
  }

  save(){
    console.log(this.product.code+" "+this.product.description+" "+this.product.price+" "+this.product.quantity);
  }

}
