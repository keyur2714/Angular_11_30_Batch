import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { BookService } from '../services/book.service';
import { Book } from '../model/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {

  bookList: Book[] = [];

  constructor(private loggingService:LoggingService,private bookService:BookService) { }

  ngOnInit() {
    this.loggingService.logInfo("BookList Initialized...");
    //this.bookList = this.bookService.getBooklist();     
    // this.bookService.getBookListObservable().subscribe(
    //   (response)=>{
    //     console.log(response);        
    //     this.bookList = response.json();
    //   }
    // )

    this.bookService.getBookListWithHttpClientObservable().subscribe(
      (bookData)=>{
        console.log(bookData);        
        this.bookList = bookData;
      }
    )
  }

}
