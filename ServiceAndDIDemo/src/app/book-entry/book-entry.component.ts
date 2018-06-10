import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit() {   
    this.loggingService.logInfo("Book Entry Component Initialized...");
  }

}
