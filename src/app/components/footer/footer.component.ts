import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  socials = [
    { icon: 'bi-github',    url: 'https://github.com/MickaelDutra',                         label: 'GitHub' },
    { icon: 'bi-linkedin',  url: 'https://www.linkedin.com/in/mickael-dutra-690970258/',    label: 'LinkedIn' },
    { icon: 'bi-instagram', url: 'https://www.instagram.com/mickael_dutra05/',              label: 'Instagram' },
  ];

  scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
