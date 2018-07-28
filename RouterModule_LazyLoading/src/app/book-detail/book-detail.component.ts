import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookId : number = 0;
  bookName: string = '';
  authorName: string = '';
  price: number = 0;

  constructor(private activatedRoute: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        console.log(params);
        console.log(params["id"]);
        this.bookId = params["id"];
      }
    )
    this.activatedRoute.queryParams.subscribe(
      (queryParams)=>{
        console.log(queryParams);
        this.bookName = queryParams["bookName"];
        this.authorName = queryParams["authorName"];
        this.price = queryParams["price"];
      }
    )
  }

  back(){
    this.location.back();
  }
}
