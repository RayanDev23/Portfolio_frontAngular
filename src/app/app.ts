import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { ParticlesHelper } from './helpers/particles.helper';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  private particlesHelper!: ParticlesHelper;

  ngOnInit() {
  const particlesHelper = new ParticlesHelper('particles', 80);
  particlesHelper.init();
}
}
