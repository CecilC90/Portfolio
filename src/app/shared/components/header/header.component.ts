import { CommonModule } from '@angular/common';
import { jsDocComment } from '@angular/compiler';
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
    let sidenav = document.getElementById('sidenav');
    
    
    if (navIcon && sidenav) {
      navIcon.classList.toggle('open');
      sidenav.classList.toggle('open');
      
      if (sidenav.classList.contains('open')) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      

    }
  }
}