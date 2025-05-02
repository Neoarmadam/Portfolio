import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private originalTitle = 'Neo Armada | Portfolio';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.originalTitle);
    this.handleTabVisibility();
  }

  handleTabVisibility() {
    window.addEventListener('blur', () => {
      this.titleService.setTitle('¡Vuelve, que hay más código!');
    });

    window.addEventListener('focus', () => {
      this.titleService.setTitle(this.originalTitle);
    });
  }
}
