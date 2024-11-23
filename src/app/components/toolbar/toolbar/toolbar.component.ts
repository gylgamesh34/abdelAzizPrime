import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="toolbar">
      <div class="logo">AbdelAzizPrime
      <div class="underline"></div>
      </div>
      <div class="sections">
        <a *ngFor="let section of sections" [routerLink]="section.route">
          {{ section.name }}
        </a>
      </div>
    </nav>
  `,
  styles: `
    .toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background-color: #fefefe;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.toolbar:hover {
  background-color: #f4f4f4;
}

.logo {
  font-family: 'Poppins', sans-serif;
  font-size: 2em; /* Augmenter la taille pour attirer l'attention */
  font-weight: bold;
  letter-spacing: 2px;
  color: #2c3e50;
  position: relative;
  display: inline-block;
  background: linear-gradient(90deg, #1abc9c, #3498db);
  -webkit-background-clip: text; /* Permet au texte d'utiliser le gradient */
  -webkit-text-fill-color: transparent; /* Rendre le texte transparent pour le gradient */
  animation: gradientFlow 3s infinite;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.logo:hover {
  transform: scale(1.1); /* Agrandir légèrement au survol */
  transition: transform 0.3s ease;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


.sections a {
  font-family: 'Poppins', sans-serif;
  margin: 0 1em;
  color: #34495e;
  text-decoration: none;
  font-size: 1.1em;
  transition: color 0.3s ease, transform 0.3s ease;
}

.sections a:hover {
  color: #1abc9c;
  transform: translateY(-2px);
  text-decoration: underline;
}
  `
})
export class ToolbarComponent {
  sections = [
    { name: 'Accueil', route: '/' },
    { name: 'Particulier', route: '/particulier' },
    { name: 'Professionnel', route: '/professionnel' },
    { name: 'Contact', route: '/contact' },
  ];
}
