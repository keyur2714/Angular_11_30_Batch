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

  newBook : Book = new Book();
  statusCode : number = 0;
  bookList: Book[] = [];
  isUpdate:boolean = false;

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
    this.getBookList();
  }

  getBookList(){
    this.bookService.getBookListWithHttpClientObservable().subscribe(
      (bookData)=>{
        console.log(bookData);        
        this.bookList = bookData;
      }
    )
  }

  save(){
    console.log(this.newBook.name);
    if(this.isUpdate){
      this.bookService.updateBook(this.newBook)
      .subscribe(
        (response)=>{
          this.statusCode = 200;
          this.getBookList();
        },
        (error)=>{
          this.statusCode = 400;
        }
      )
    }else{
      this.bookService.saveBook(this.newBook)
      .subscribe(
        (response)=>{
          console.log("==="+response.json());
          this.statusCode = 201;
          this.getBookList();
        },
        (error)=>{
          console.log(error);
          this.statusCode = 400;
        }
      );
    }
    
  }
  edit(bookId:number){
     console.log(bookId);
     this.bookService.getBookById(bookId).subscribe(
       (book)=>{
        console.log(book.name); 
        this.newBook = book;
        this.isUpdate = true;
       },
       (error)=>{

       }
     )   
  }

 delete(bookId){
   let result = confirm("Are you Sure?");
   if(result){
      this.bookService.deleteBook(bookId).subscribe(
        (response)=>{
          this.statusCode = 204;
          this.getBookList();
        },
        (error)=>{
          this.statusCode = 400;
        }
      )
    }
 } 

}
