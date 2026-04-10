import { Component } from '@angular/core';
import { NavbarComponent }   from './components/navbar/navbar';
import { HeroComponent }     from './components/hero/hero';
import { AboutComponent }    from './components/about/about';
import { ProgramsComponent } from './components/programs/programs';
import { ImpactComponent }   from './components/impact/impact';
import { ContactComponent }  from './components/contact/contact';
import { FooterComponent }   from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProgramsComponent,
    ImpactComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
