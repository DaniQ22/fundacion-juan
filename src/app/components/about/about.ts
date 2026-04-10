import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  values = [
    { icon: '🕊️', title: 'Dignidad',      desc: 'Reconocemos y honramos la dignidad de cada persona afectada por el conflicto.' },
    { icon: '🌱', title: 'Esperanza',     desc: 'Creemos en la capacidad de sanar y construir un futuro mejor para las comunidades.' },
    { icon: '🤝', title: 'Solidaridad',   desc: 'Trabajamos junto a las comunidades, no por ellas. La transformación es colectiva.' },
    { icon: '🌍', title: 'Diversidad',    desc: 'Abrazamos la riqueza cultural de Colombia: indígenas, afros, campesinos y mestizos.' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    );
    this.revealEls.forEach(el => observer.observe(el.nativeElement));
  }
}
