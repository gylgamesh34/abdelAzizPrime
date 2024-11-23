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
      <div class="menu-toggle" (click)="toggleMenu()">☰</div>
      <div class="sections" [class.open]="isMenuOpen">
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
      font-size: 2em;
      font-weight: bold;
      letter-spacing: 2px;
      color: #2c3e50;
      position: relative;
      display: inline-block;
      background: linear-gradient(90deg, #1abc9c, #3498db);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientFlow 3s infinite;
    }

    .logo:hover {
      transform: scale(1.1);
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

    /* Menu hamburger */
    .menu-toggle {
      display: none;
      cursor: pointer;
      font-size: 2em;
    }

    .sections {
      display: flex;
      gap: 2em;
    }

    /* Styles responsive pour les petits écrans */
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }

      .sections {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fefefe;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(100%);
        transition: transform 0.3s ease;
      }

      .sections.open {
        transform: translateX(0);
      }

      .sections a {
        margin: 1em 0;
        font-size: 1.5em;
      }
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

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
