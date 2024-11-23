import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar/toolbar.component';
import { BodyComponent } from './components/body/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, BodyComponent],
  template: `
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
}
