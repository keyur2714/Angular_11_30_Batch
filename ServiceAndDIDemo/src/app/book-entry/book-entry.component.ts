import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css'],
  providers: [BookService]
})
export class BookEntryComponent implements OnInit {

  newBook : Book = new Book();
  statusCode : number = 0;

  constructor(private loggingService:LoggingService,private bookService:BookService) { }

  ngOnInit() {   
    this.loggingService.logInfo("Book Entry Component Initialized...");
  }

  save(){
    console.log(this.newBook.name);
    this.bookService.saveBook(this.newBook)
      .subscribe(
        (response)=>{
          console.log("==="+response.json());
          this.statusCode = 201;
        },
        (error)=>{
          console.log(error);
          this.statusCode = 400;
        }
    );
    
  }

}
