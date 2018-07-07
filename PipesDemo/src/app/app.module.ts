import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { FormateStringPipe } from './formate-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    FormateStringPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
