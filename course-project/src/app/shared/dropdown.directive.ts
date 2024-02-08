import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  // the @HostBinding will automatically add the .open class whenever the isOpen property is set to true.
  @Input() @HostBinding('class.open') isOpen: boolean;

  constructor(private elementRef: ElementRef) { }

  public ngOnInit(): void {
    if(!!!this.isOpen) {
      this.isOpen = false;
    }
  }

  // This allows the dropdown to close whenever a click is done outside of the dropdown.
  // It also allows the dropdown to open correctly when toggling between dropdowns
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
