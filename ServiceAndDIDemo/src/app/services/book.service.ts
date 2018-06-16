import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class BookService{

    appUrl:string = "http://localhost:3000/bookData";

    constructor(private http:Http,private httpClient:HttpClient){}

    getBooklist():Book[]{
        let bookList:Book[] = [
            {
                id : 1,
                name: "Angular",
                authorName: "Google",
                price: 500
            },
            {
                id : 2,
                name: "Java",
                authorName: "Oracle",
                price: 600
            },
            {
                id : 3,
                name: ".Net",
                authorName: "Microsoft",
                price: 700
            }
        ];
        return bookList;
    }

    // getBookListObservable():Observable<Response>{
    //     return this.http.get(this.appUrl);
    // }

     getBookListObservable():Observable<Response>{
         return this.http.get(this.appUrl);
     }

    getBookListWithHttpClientObservable():Observable<Book[]>{
        return this.httpClient.get<Book[]>(this.appUrl);
    }

    saveBook(newBook:Book):Observable<Response>{
        return this.http.post(this.appUrl,newBook);                
    }

    updateBook(newBook:Book):Observable<Response>{
        return this.http.put(this.appUrl+"/"+newBook.id,newBook);                
    }

    deleteBook(id:number):Observable<Response>{
        return this.http.delete(this.appUrl+"/"+id);                
    }

    getBookById(bookId:number):Observable<Book>{
        return this.httpClient.get<Book>(this.appUrl+"/"+bookId);
    }
}