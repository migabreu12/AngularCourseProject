import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'course-project';
  public featureSelected = 'recipe'

  public onNavigate(feature: string) {
    this.featureSelected = feature;
  }
}
