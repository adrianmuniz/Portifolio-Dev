import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  onClick() {
    window.open('https://www.linkedin.com/in/cainaadriandesenvolvedor/', '_blank')
  }

  constructor(private scrollService: ScrollService) { }

  scrollToSection() {
    this.scrollService.scrollToSection('aboutMe');
  }
}
