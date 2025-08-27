import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navbar} from './core/components/navbar/navbar';
import {Footer} from './core/components/footer/footer';
import {Theme} from '@core/services/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected themeService = inject(Theme);
}
