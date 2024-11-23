import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar/toolbar.component';
import { BodyComponent } from '../body/body/body.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent, BodyComponent],
  template: `

  <app-toolbar></app-toolbar>
  <app-body></app-body>
  `,
  styles: ``
})
export default class HomeComponent {

}
