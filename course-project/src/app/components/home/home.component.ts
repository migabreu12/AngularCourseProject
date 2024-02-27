import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public title = 'course-project';
  public featureSelected = 'recipe'

  public onNavigate(feature: string) {
    this.featureSelected = feature;
  }
}