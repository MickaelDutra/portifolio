import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  stats = [
    { value: '1+',   label: 'Anos de Exp.' },
    { value: '10+',  label: 'Projetos' },
    { value: '100%', label: 'Dedicação' },
  ];

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
