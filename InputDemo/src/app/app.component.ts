import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Input Demo';

  myMessage: string = "How are you?";

  listOfMessages : string[] = [
    "Good Morning..!",
    "Good Afternoon..!",
    "Good Evening..!"
  ];
}
