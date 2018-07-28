import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { BookEntryComponent } from '../book-entry/book-entry.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookEntryComponent,
    BookDetailComponent    
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  providers: []  
})
export class BookModule { 
  constructor(){
    console.log("Book Module Loaded...!");
  }
}
