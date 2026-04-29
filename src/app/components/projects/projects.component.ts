import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title:       string;
  description: string;
  image:       string;
  tags:        string[];
  githubUrl?:  string;
  liveUrl?:    string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls:  ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Centro de Distribuição',
      description:
        'Sistema de gerenciamento para centro de distribuição com relatórios em tempo real.',
      image: 'images/centro_distribuicao.jpeg',
      tags: ['NodeJs'],
      githubUrl: 'https://github.com/MickaelDutra/centro_distribuicao',
    },
    {
      title: 'Logos Dev',
      description:
        'Plataforma de desenvolvimento com interface moderna e funcionalidades avançadas para desenvolvedores.',
      image: 'images/logos.png',
      tags: ['HTML', 'JavaScript', 'CSS'],
      liveUrl: 'https://logos-dev.vercel.app/',
    },
    {
      title: 'Pesos CD',
      description:
        'Algoritimo desenvolvido para encontrar padrão de pesos entre produtos semelhantes.',
      image: 'images/centro_distribuicao_pesos.jpeg',
      tags: ['JavaScript'],
      liveUrl: 'https://github.com/MickaelDutra/busca_pesos_por_ean',
    },
    {
      title: 'Ebac Talks',
      description:
        'Plataforma desenvolvida para estudos.',
      image: 'images/ebach_talks.png',
      tags: ['HTML', 'JavaScript', 'CSS'],
      liveUrl: 'https://github.com/MickaelDutra/ebac_tech_talks',
    }
  ];
}
