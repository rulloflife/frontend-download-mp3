import { Directive, ElementRef, HostListener, output } from '@angular/core';

@Directive({
  selector: '[appInputBouncer]'
})
export class InputBouncerDirective {

  keyUpTimout?: any;

  keyUpBouncer = output<string>();
  @HostListener('keyup', ['$event.target']) onClick() {
    if (this.keyUpTimout) {
      clearTimeout(this.keyUpTimout);
    }
    this.keyUpTimout = setTimeout(() => {
      this.keyUpBouncer.emit(this.elementRef.nativeElement.value)
      this.keyUpTimout = undefined;
    }, 300);
  }
  constructor(private elementRef: ElementRef) { }

  ngOnDestroy(): void {
    if (this.keyUpTimout) {
      clearTimeout(this.keyUpTimout);
    }
  }

}
