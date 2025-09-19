import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const nav = document.querySelector('.nav-links');
    if (nav) {
      if (this.menuOpen) nav.classList.add('open');
      else nav.classList.remove('open');
    }
  }
}
