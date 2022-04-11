import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-block',
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.css']
})
export class QuoteBlockComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes ("If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "James Cameron", 0, 0, new Date(27,7,1992)),
    new Quotes ("Life is what happens when you're busy making other plans.", "John Lennon", 1, 0, new Date(17,12,2004)),
    new Quotes ("Whoever is happy will make others happy too.", "Anne Frank", 0, 0, new Date(10,18,2017)),
    new Quotes ("The secret of getting ahead is getting started", "Mark Twain", 0, 0, new Date(4,8,2014))
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
