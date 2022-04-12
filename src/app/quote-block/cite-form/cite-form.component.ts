import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cite-form',
  templateUrl: './cite-form.component.html',
  styleUrls: ['./cite-form.component.css']
})
export class CiteFormComponent implements OnInit {
  quotation = new Quotes(0,"","",0 , 0,new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  submitGoal(){
this.addQuote.emit(this.quotation);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
