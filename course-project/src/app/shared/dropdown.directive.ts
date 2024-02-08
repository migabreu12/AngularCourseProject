import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() dropdownClosed: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  public ngOnInit(): void {
    if(!!!this.dropdownClosed) {
      this.dropdownClosed = true;
    }

    if(!this.dropdownClosed) {
      this.toggleDropdownClass();
    }
;  }

  @HostListener('click') click() {
    this.toggleDropdownClass();
    this.toggleDropdownClosed();
  }

  private toggleDropdownClosed() {
    this.dropdownClosed = !this.dropdownClosed;
  }

  private toggleDropdownClass() {
    if(this.dropdownClosed) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }
}
