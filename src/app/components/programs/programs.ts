import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-programs',
  standalone: true,
  templateUrl: './programs.html',
  styleUrl: './programs.css'
})
export class ProgramsComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  programs = [
    {
      emoji:    '🧠',
      color:    '#E8F5E9',
      accent:   '#2E7D32',
      title:    'Atención Psicosocial',
      desc:     'Acompañamiento terapéutico individual y grupal para víctimas con traumas del conflicto. Contamos con psicólogos y trabajadores sociales especializados en trauma complejo.',
      tags:     ['Terapia individual', 'Grupos de apoyo', 'Familias'],
    },
    {
      emoji:    '🕊️',
      color:    '#E3F2FD',
      accent:   '#1565C0',
      title:    'Reconciliación y Memoria',
      desc:     'Espacios de diálogo, encuentro y sanación entre víctimas y excombatientes. Preservamos la memoria histórica para que no se repita el dolor.',
      tags:     ['Diálogo comunitario', 'Memoria histórica', 'Perdón'],
    },
    {
      emoji:    '📚',
      color:    '#FFF8E1',
      accent:   '#F57F17',
      title:    'Educación para la Paz',
      desc:     'Programas educativos en escuelas y comunidades rurales que promueven la resolución pacífica de conflictos, derechos humanos y ciudadanía activa.',
      tags:     ['Escuelas', 'Talleres', 'Jóvenes'],
    },
    {
      emoji:    '🌱',
      color:    '#F3E5F5',
      accent:   '#7B1FA2',
      title:    'Empoderamiento Comunitario',
      desc:     'Fortalecemos capacidades locales con proyectos productivos, liderazgo comunitario y acceso a derechos. Las comunidades son protagonistas de su propia transformación.',
      tags:     ['Proyectos productivos', 'Liderazgo', 'Derechos'],
    },
    {
      emoji:    '🏡',
      color:    '#FCE4EC',
      accent:   '#C62828',
      title:    'Reconstrucción del Tejido Social',
      desc:     'Fortalecemos los lazos comunitarios rotos por el desplazamiento y la violencia. Trabajamos en zonas de retorno para reconstruir la vida en común.',
      tags:     ['Retorno', 'Comunidad', 'Identidad'],
    },
    {
      emoji:    '🌍',
      color:    '#E0F7FA',
      accent:   '#006064',
      title:    'Diversidad e Inclusión',
      desc:     'Reconocemos y valoramos la identidad cultural de comunidades indígenas, afrocolombianas y campesinas como fundamento de la paz territorial.',
      tags:     ['Indígenas', 'Afrocolombianos', 'Campesinos'],
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
