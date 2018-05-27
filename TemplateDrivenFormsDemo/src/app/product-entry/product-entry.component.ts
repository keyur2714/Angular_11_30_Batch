import { Component, OnInit } from '@angular/core';
import { Product } from './product-model';
@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(frmProduct){
    console.log("Inside Save Method");
    console.log("NgForm: "+frmProduct);
    if(frmProduct.valid){
      let product:Product = frmProduct.value;
      console.log(frmProduct.value);
      console.log(product.code+" "+product.description);
      // console.log(frmProduct.controls["code"].value);
    }else{
      console.log("InValid Form Submition");
    }    
  }

}
