import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled  = signal(false);
  menuOpen    = signal(false);

  navItems = [
    { label: 'Início',       href: '#hero' },
    { label: 'Sobre',        href: '#sobre' },
    { label: 'Habilidades',  href: '#habilidades' },
    { label: 'Projetos',     href: '#projetos' },
    { label: 'Contato',      href: '#contato' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.isScrolled.set(window.scrollY > 60); }

  toggle() { this.menuOpen.update(v => !v); }
  close()  { this.menuOpen.set(false); }

  go(href: string) {
    this.close();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
