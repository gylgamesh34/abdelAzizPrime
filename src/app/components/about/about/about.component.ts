import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about-container">
  <h1>À propos de nous</h1>
  <p>
    Bienvenue sur <strong>abdelAzizPrime</strong>, votre destination pour des solutions modernes et innovantes.
    Nous sommes dédiés à fournir des services de qualité adaptés à vos besoins.
  </p>
  <div class="about-sections">
    <div class="about-card">
      <h2>Notre Mission</h2>
      <p>
        Offrir des expériences uniques et personnalisées pour nos clients en combinant innovation et excellence.
      </p>
    </div>
    <div class="about-card">
      <h2>Notre Vision</h2>
      <p>
        Devenir un leader dans notre domaine tout en inspirant la confiance et la créativité.
      </p>
    </div>
    <div class="about-card">
      <h2>Nos Valeurs</h2>
      <p>
        Intégrité, innovation, et satisfaction client sont au cœur de tout ce que nous faisons.
      </p>
    </div>
  </div>
</div>

  `,
  styles: `
    .about-container {
  padding: 2em;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #34495e;
  background: #f9f9f9;
}

.about-container h1 {
  font-size: 2.5em;
  margin-bottom: 1em;
  color: #2c3e50;
}

.about-container p {
  font-size: 1.2em;
  margin-bottom: 2em;
  line-height: 1.6;
  color: #7f8c8d;
}

.about-sections {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  justify-content: center;
}

.about-card {
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1.5em;
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  text-align: left;
}

.about-card h2 {
  color: #1abc9c;
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

.about-card p {
  font-size: 1em;
  color: #7f8c8d;
  line-height: 1.6;
}

.about-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

  `
})
export default class AboutComponent {

}
