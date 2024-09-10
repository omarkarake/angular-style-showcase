import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor() {}
  @Input('appHighlight') highlightColor: string = '#ffffcc'; // Default color
  
  @HostBinding('style.color') backgroundColor!: string;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';
  }
}
