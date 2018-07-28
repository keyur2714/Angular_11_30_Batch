import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BookListComponent } from './book-list/book-list.component';
// import { BookEntryComponent } from './book-entry/book-entry.component';
// import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { BookModule } from './book/book.module';

@NgModule({
  declarations: [
    AppComponent,
    // BookListComponent,
    // BookEntryComponent,
    // BookDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Loaded...!");
  }
}
