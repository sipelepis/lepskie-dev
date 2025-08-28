import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {ThemeState, ToggleState} from '@shared/types/config/theme';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private document = inject(DOCUMENT);
  
  toggleState = signal<ToggleState>("off");

  systemTheme = computed<ThemeState>(() => {
    if (this.toggleState() === 'on') {
      return 'dark';
    }
    return 'light';
  });

  constructor() {
    effect(() => {
      const theme = this.systemTheme();
      const htmlElement = this.document.documentElement;
      
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
        htmlElement.classList.remove('light');
      } else {
        htmlElement.classList.add('light');
        htmlElement.classList.remove('dark');
      }
    });
  }

  toggleTheme() {
    this.toggleState.update(state => state === "on" ? "off" : "on");
  }
}
