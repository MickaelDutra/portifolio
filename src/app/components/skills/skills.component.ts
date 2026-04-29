import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill { name: string; icon: string; level: number; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('bar') bars!: QueryList<ElementRef<HTMLElement>>;

  categories = [
    {
      title: 'Frontend',
      icon: 'bi-window',
      skills: [
        { name: 'HTML & CSS',   icon: 'bi-filetype-html', level: 95 },
        { name: 'JavaScript',   icon: 'bi-filetype-js',   level: 88 },
        { name: 'TypeScript',   icon: 'bi-braces',         level: 82 },
        { name: 'Angular',      icon: 'bi-shield-check',   level: 85 },
        { name: 'React',        icon: 'bi-code-slash',     level: 60 },
        { name: 'Bootstrap',    icon: 'bi-bootstrap',      level: 80 },
      ] satisfies Skill[],
    },
    {
      title: 'Backend & Ferramentas',
      icon: 'bi-terminal',
      skills: [
        { name: 'Node.js',   icon: 'bi-braces-asterisk', level: 70 },
        { name: 'Git / GitHub', icon: 'bi-github',       level: 88 },
        { name: 'SQL',       icon: 'bi-database',         level: 72 },
        { name: 'REST APIs', icon: 'bi-plug',             level: 80 },
        { name: 'Linux',     icon: 'bi-terminal',         level: 65 },
        { name: 'Docker',    icon: 'bi-box',              level: 70 },
      ] satisfies Skill[],
    },
  ];

  extras = ['Sass / SCSS', 'Figma', 'Jest', 'Postman', 'VS Code'];

  ngAfterViewInit() {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.width =
            (e.target as HTMLElement).dataset['level'] + '%';
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.2 }
    );
    this.bars.forEach(b => io.observe(b.nativeElement));
  }
}
