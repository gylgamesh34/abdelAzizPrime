import { Component } from '@angular/core';
import AboutComponent from '../../about/about/about.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AboutComponent],
  template: `
    <div class="body-content">
      <div class="body-overlay"></div> <!-- Overlay -->
      <div class="body-content-text">
        <h1>Bienvenue sur abdelAzizPrime</h1>
        <p>Découvrez nos solutions élégantes et modernes adaptées à vos besoins.</p>
        <button class="cta-button">En savoir plus</button>
      </div>
    </div>
    <app-about></app-about>

  `,
  styles: `
  .body-content {
  position: relative;
  text-align: center;
  padding: 4em 2em;
  min-height: calc(100vh - 80px); /* Ajuste en fonction de la toolbar */
  color: #ffffff;
  background: url('/assets/images/hak.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.body-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Overlay semi-transparent */
  z-index: 1;
}

.body-content-text {
  position: relative;
  z-index: 2; /* Pour que le texte soit au-dessus de l'overlay */
  font-family: 'Poppins', sans-serif;
}

.body-content h1 {
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 0.5em;
  animation: fadeIn 1.5s ease-in-out;
}

.body-content p {
  font-size: 1.2em;
  margin-bottom: 1.5em;
  animation: fadeIn 1.5s ease-in-out;
}

.cta-button {
  font-size: 1.2em;
  padding: 0.8em 2em;
  color: #ffffff;
  background-color: #1abc9c;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #16a085;
  transform: scale(1.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}



`
})
export class BodyComponent {

}
