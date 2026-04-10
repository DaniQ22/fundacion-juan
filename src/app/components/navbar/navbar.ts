import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  scrolled  = signal(false);
  menuOpen  = signal(false);

  links = [
    { label: 'Inicio',     href: '#inicio'      },
    { label: 'Nosotros',   href: '#nosotros'     },
    { label: 'Programas',  href: '#programas'    },
    { label: 'Impacto',    href: '#impacto'      },
    { label: 'Contacto',   href: '#contacto'     },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  scrollTo(href: string) {
    this.closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
