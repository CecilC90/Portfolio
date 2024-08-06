import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  languages = ['en', 'de'];
  private translateService = inject(TranslateService);
  defaultLange!: string;


  ngOnInit(): void {
    this.defaultLange = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(this.defaultLange);
    this.translateService.use(this.defaultLange);
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    this.defaultLange = lang;
  }

  isActiveLang(lang: string): boolean {
    return this.defaultLange === lang;
  }


  toggleMenu() {
    let navIcon = document.getElementById('burger-icon');
    if (navIcon) {
      navIcon.classList.toggle('open');
      console.log("Menu toggled");
    }
  }
}