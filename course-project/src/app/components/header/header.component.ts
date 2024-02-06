import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>;

  public collapsed = true;

  public onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
