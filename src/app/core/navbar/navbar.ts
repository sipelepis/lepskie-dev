import { Component } from '@angular/core';
import {LucideAngularModule, User} from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  readonly logoPlaceholer = User;
}
