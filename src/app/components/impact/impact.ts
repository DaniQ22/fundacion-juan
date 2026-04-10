import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact.html',
  styleUrl: './impact.css'
})
export class ImpactComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  stats = [
    { value: '2.500+',  label: 'Personas beneficiadas',    icon: '👥', desc: 'Víctimas directas e indirectas del conflicto atendidas' },
    { value: '45+',     label: 'Municipios',                icon: '📍', desc: 'En todo el territorio colombiano, priorizando zonas de posconflicto' },
    { value: '120+',    label: 'Comunidades',               icon: '🏘️', desc: 'Indígenas, afrocolombianas, campesinas y urbanas' },
    { value: '8',       label: 'Años de trabajo',           icon: '📅', desc: 'De dedicación continua a la construcción de paz' },
    { value: '350+',    label: 'Talleres realizados',       icon: '🎓', desc: 'En atención psicosocial, educación y liderazgo' },
    { value: '15',      label: 'Aliados estratégicos',      icon: '🤝', desc: 'ONGs, entidades públicas y organismos internacionales' },
  ];

  testimonials = [
    {
      quote: 'La fundación me devolvió las ganas de vivir. Aprendí que mi historia no define mi futuro, que puedo sembrar algo nuevo.',
      name: 'María Esperanza G.',
      region: 'Montes de María, Bolívar',
      initial: 'M',
    },
    {
      quote: 'Gracias a los talleres de liderazgo, hoy soy la primera mujer presidenta de nuestra junta comunal. El dolor se convirtió en fuerza.',
      name: 'Rosa Elena T.',
      region: 'Bajo Cauca, Antioquia',
      initial: 'R',
    },
    {
      quote: 'Nunca creí que podría estar en el mismo salón con quien me hizo daño. El proceso de reconciliación cambió mi vida y la de mi familia.',
      name: 'Héctor Fabián M.',
      region: 'Norte de Santander',
      initial: 'H',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    this.revealEls.forEach(el => observer.observe(el.nativeElement));
  }
}
