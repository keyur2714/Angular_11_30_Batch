import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';
import { BookEntryComponent } from '../book-entry/book-entry.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';

const routes: Routes = [
      {
          path: '',
          component: BookListComponent,
          children: [ 
	        {
	            path: 'book-entry' , 
                component: BookEntryComponent
            },
            {
               path: 'book-detail/:id', 
               component: BookDetailComponent
            }           
	      ]
	  }	         
];

@NgModule({
  imports: [ 
        RouterModule.forChild(routes) 
  ],
  exports: [ 
        RouterModule 
  ]
})
export class BookRoutingModule { 
    constructor(){
        console.log("Book Routing Module Loaded...");
    }
} 