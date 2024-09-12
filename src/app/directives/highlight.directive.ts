import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor = '#ffffcc'; // Default text color
  @HostBinding('style.color') textColor!: string; // Bind to text color instead of background
}
