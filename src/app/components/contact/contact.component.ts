import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ToolbarComponent, FormsModule],
  template: `
    <app-toolbar></app-toolbar>
    <div class="form-container">
  <h2>Formulaire de contact</h2>
  <form (submit)="sendEmail($event)">
    <div class="form-group">
      <label for="name">Nom</label>
      <input type="text" id="name" [(ngModel)]="name" name="name" placeholder="Entrez votre nom" required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" [(ngModel)]="email" name="email" placeholder="Entrez votre email" required>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" [(ngModel)]="message" name="message" placeholder="Entrez votre message" required></textarea>
    </div>
    <div class="form-group">
      <button type="submit" class="submit-btn">Envoyer</button>
    </div>
  </form>
</div>

  `,
  styles: `
    /* Conteneur du formulaire */
.form-container {
  margin-top: 100px; /* Décale le formulaire sous la barre de navigation */
  padding: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  animation: fadeIn 1s ease-out;
}

.form-container:hover {
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
}

/* Animation du formulaire */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Titre du formulaire */
h2 {
  text-align: center;
  color: #2c3e50;
  font-family: 'Poppins', sans-serif;
  font-size: 2.2em;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: slideInFromLeft 1s ease-out;
}

/* Animation du titre */
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Styles des champs du formulaire */
.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 1.2em;
  color: #34495e;
  margin-bottom: 10px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.form-group label:hover {
  color: #1abc9c;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  font-size: 1.1em;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #1abc9c;
  box-shadow: 0 0 8px rgba(26, 188, 156, 0.6);
  outline: none;
}

/* Textarea spécifique */
.form-group textarea {
  height: 180px;
  resize: none;
}

/* Animation de l'input et textarea */
@keyframes inputFocus {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

/* Bouton de soumission */
.submit-btn {
  background-color: #1abc9c;
  color: white;
  padding: 15px 30px;
  font-size: 1.3em;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover {
  background-color: #16a085;
  transform: translateY(-5px);
}

.submit-btn:active {
  background-color: #1abc9c;
  transform: translateY(2px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

/* Effet de survol des champs de saisie */
.form-group input:hover,
.form-group textarea:hover {
  border-color: #1abc9c;
  box-shadow: 0 0 8px rgba(26, 188, 156, 0.3);
}

/* Effet d'ombre pour l'ensemble du formulaire */
.form-container:hover {
  transform: scale(1.02);
}

  `
})
export default class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  // Fonction pour envoyer le formulaire via EmailJS
  sendEmail(event: Event) {
    event.preventDefault();

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    // Remplace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' et 'YOUR_USER_ID' par tes valeurs obtenues sur EmailJS
    emailjs.send('service_2s8jirb', 'template_j9uww2s', templateParams, '57Dns-hV19v5KGE9-')
      .then((response) => {
        console.log('Success:', response);
        alert('Message envoyé avec succès!');
      }, (error) => {
        console.error('Failed:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  }
}
