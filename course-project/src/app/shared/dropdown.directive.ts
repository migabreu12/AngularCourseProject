import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() @HostBinding('class.open') isOpen: boolean;

  constructor() { }

  public ngOnInit(): void {
    if(!!!this.isOpen) {
      this.isOpen = false;
    }
  }

  @HostListener('click') click() {
    this.isOpen = !this.isOpen;
  }
}
