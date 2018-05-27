import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { ProductEntryBindingComponent } from './product-entry-binding/product-entry-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent,
    ProductEntryBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
