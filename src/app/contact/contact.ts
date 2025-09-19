import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service'; // ✅ service Angular
import { Contact } from '../services/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  messageEnvoye: boolean = false; // ✅ pour afficher l'animation

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contact: Contact = this.contactForm.value;

      this.contactService.createContact(contact).subscribe({
        next: (res) => {
          console.log('Message enregistré 🚀', res);
          
          // Affiche le message animé
          this.messageEnvoye = true;

          // Cache le message après 3 secondes
          setTimeout(() => this.messageEnvoye = false, 3000);

          this.contactForm.reset();
        },
        error: (err) => {
          console.error('Erreur envoi du contact ❌', err);
        }
      });
    }
  }
}
