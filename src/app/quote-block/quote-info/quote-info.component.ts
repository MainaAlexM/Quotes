import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  @Input()
  quote!: Quotes;
  @Output() toDelete = new EventEmitter<boolean>();

  
  deleteItem(done:boolean){
    this.toDelete.emit(done);
  }



  constructor() { }

  ngOnInit(): void {
  }


}
