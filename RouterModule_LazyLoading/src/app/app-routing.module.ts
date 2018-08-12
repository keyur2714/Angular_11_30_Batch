import { NgModule } from '@angular/core';
import {RouterModule,Routes,PreloadAllModules } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
      {
	    path: 'book-list',
        loadChildren: './book/book.module#BookModule'        
      },   
   	  {path: 'home' , component: HomeComponent}
    //   {path: 'book-list' , component: BookListComponent},
    //   {path: 'book-entry' , component: BookEntryComponent},
    //   {path: 'book-detail/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [ 
        RouterModule.forRoot(
            routes,
            {preloadingStrategy : PreloadAllModules}
        ) 
  ],
  exports: [ 
        RouterModule 
  ]
})
export class AppRoutingModule { 
    constructor(){
        console.log("App Routing Module Loaded...");
    }
} 