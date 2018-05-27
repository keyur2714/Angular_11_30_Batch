import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomeColorDirective } from './custome-color.directive';
import { ControlBackGroundColor } from './control-background-color';


@NgModule({
  declarations: [
    AppComponent,
    CustomeColorDirective,
    ControlBackGroundColor
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
