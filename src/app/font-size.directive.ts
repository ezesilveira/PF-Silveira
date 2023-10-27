import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnInit {
  @Input() fontSize: string = '20px'; // Tamaño de fuente por defecto

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.fontSize = this.fontSize;
  }
}
