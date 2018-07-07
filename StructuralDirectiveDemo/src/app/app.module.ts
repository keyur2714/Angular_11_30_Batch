import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyIfDirective } from './my-if.directive';
import { MyForLoopDirective } from './my-for-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyIfDirective,
    MyForLoopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
