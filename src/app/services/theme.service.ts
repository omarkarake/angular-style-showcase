import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkThemeEnabled = false;

  toggleTheme() {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    const themeClass = this.darkThemeEnabled ? 'dark-theme' : '';
    document.documentElement.className = themeClass;
  }
}
