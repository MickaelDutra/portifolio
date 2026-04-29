import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  private roles = [
    'Desenvolvedor Full Stack',
    'Angular Developer',
    'Node.js Developer',
    'UI/UX Enthusiast',
  ];
  private idx       = 0;
  private deleting  = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  displayedRole = '';

  ngOnInit()    { this.tick(); }
  ngOnDestroy() { if (this.timer) clearTimeout(this.timer); }

  private tick() {
    const full = this.roles[this.idx];
    this.displayedRole = this.deleting
      ? full.slice(0, this.displayedRole.length - 1)
      : full.slice(0, this.displayedRole.length + 1);

    let delay = this.deleting ? 45 : 95;
    if (!this.deleting && this.displayedRole === full)   { delay = 2200; this.deleting = true; }
    else if (this.deleting && this.displayedRole === '') { this.deleting = false; this.idx = (this.idx + 1) % this.roles.length; delay = 400; }

    this.timer = setTimeout(() => this.tick(), delay);
  }

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
