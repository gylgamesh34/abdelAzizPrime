import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar/toolbar.component';

@Component({
  selector: 'app-profesionnel',
  standalone: true,
  imports: [ToolbarComponent],
  template: `
    <app-toolbar></app-toolbar>
  <div class="body-content">
      <div class="body-overlay"></div> <!-- Overlay -->
      <div class="body-content-text">
        <video width="1280" height="720" controls>
        <source src="assets/videos/Aziz-le_Boss_profesionnel.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas l'élément vidéo.
        </video>
      </div>
  `,
  styles: `
    .body-content {
  position: relative;
  text-align: center;
  padding: 4em 2em;
  min-height: calc(100vh - 80px); /* Ajuste en fonction de la toolbar */
  color: #ffffff;
  background: url('/assets/images/AbdelAzizService.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
  `
})
export default class ProfesionnelComponent {

}
