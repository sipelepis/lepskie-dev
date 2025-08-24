import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HlmButton} from '@spartan-ng/helm/button';
import {HlmAvatar, HlmAvatarFallback, HlmAvatarImage} from '@spartan-ng/helm/avatar';
import {NgOptimizedImage} from '@angular/common';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {lucideItalic, lucideMoon, lucideSun} from '@ng-icons/lucide';
import {BrnToggle} from '@spartan-ng/brain/toggle';
import {HlmIcon} from '@spartan-ng/helm/icon';
import {HlmToggle} from '@spartan-ng/helm/toggle';

type Theme = "light" | "dark";
type ToggleState = "on" | "off";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, HlmButton, HlmAvatarImage, HlmAvatar, HlmAvatarFallback,
    BrnToggle, HlmToggle, NgIcon, HlmIcon, NgOptimizedImage],
  providers: [provideIcons({lucideItalic, lucideMoon, lucideSun})],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  systemTheme = signal<Theme>("dark");
  toggleState = signal<ToggleState>("off");

  toggleTheme() {
    this.toggleState.update(state => state === "on" ? "off" : "on");
  }

}
