import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  private translateService = inject(TranslateService); 

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.use(defaultLang);
  }

  projects = [
    {
      projectName: 'Join',
      projectTechnologie: 'HMTL | CSS | JavaScript',
      projectDescription: 'portfolio.joinText',
      projectLink: '',
      projectGitHub: '',
      projectImg: 'join'

    },
    {
      projectName: 'El Pollo Loco',
      projectTechnologie: 'HMTL | CSS | JavaScript',
      projectDescription: 'portfolio.PolloLocoText',
      projectLink: '',
      projectGitHub: '',
      projectImg: 'pollo_loco'
      
    }
  ]
  translateProjectDescriptions() {
    this.projects.forEach(project => {
      project.projectDescription = this.translateService.instant(project.projectDescription);
    });
  }
}
