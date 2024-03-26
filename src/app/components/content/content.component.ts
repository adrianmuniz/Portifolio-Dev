import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  onClick() {
    window.open('https://www.linkedin.com/in/cainaadriandesenvolvedor/', '_blank')
  }

  dsCatalog() {
    window.open('https://github.com/adrianmuniz/DsCatalog', '_blank')
  }

  eadCourse() {
    window.open('https://github.com/adrianmuniz/ead_course', '_blank')
  }

  eadNotification() {
    window.open('https://github.com/adrianmuniz/ead_notification', '_blank')
  }

  eadAuthUser() {
    window.open('https://github.com/adrianmuniz/ead_authuser', '_blank')
  }

  servRegistry() {
    window.open('https://github.com/adrianmuniz/ead_service-registry', '_blank')
  }

  configServer() {
    window.open('https://github.com/adrianmuniz/ead-config-server-repo', '_blank')
  }
}
