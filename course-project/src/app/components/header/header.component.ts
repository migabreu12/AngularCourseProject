import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() displayRecipeListEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() displayShoppingListEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public collapsed = true;

  public emitDisplayRecipeList() {
    this.displayRecipeListEmitter.emit(true);
  }

  public emitDisplayShoppingList() {
    this.displayShoppingListEmitter.emit(true);
  }
}
