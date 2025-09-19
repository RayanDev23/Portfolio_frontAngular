import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesHelper } from '../helpers/particles.helper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor() {
    // Initialisation des particules
    const particles = new ParticlesHelper('particles', 80);
    particles.init();
  }

  scrollToSkills() {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
