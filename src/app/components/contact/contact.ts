import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  form = { name: '', email: '', type: '', message: '' };
  sent = false;

  contactInfo = [
    { icon: '📍', label: 'Dirección',   value: 'Bogotá D.C., Colombia' },
    { icon: '📧', label: 'Email',       value: 'info&#64;sembrandosuenos.org' },
    { icon: '📱', label: 'Instagram',   value: '@funsembrandosuenos' },
    { icon: '🌐', label: 'Cobertura',   value: 'Nacional — 45+ municipios' },
  ];

  submit() {
    this.sent = true;
    this.form = { name: '', email: '', type: '', message: '' };
    setTimeout(() => this.sent = false, 5000);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    this.revealEls.forEach(el => observer.observe(el.nativeElement));
  }
}
