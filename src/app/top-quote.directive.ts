import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTopQuote]'
})
export class TopQuoteDirective {
  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor = '#FFD700'
    }

}
