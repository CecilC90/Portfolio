import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
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
      projectTechnologie: 'HMTL | CSS | JavaScript | Firebase',
      projectDescription: 'portfolio.joinText',
      projectLink: 'https://join.cecil-cigan.at',
      projectGitHub: 'https://github.com/CecilC90/Main-Join',
      projectImg: 'join',
    },
    {
      projectName: 'El Pollo Loco',
      projectTechnologie: 'HMTL | CSS | JavaScript',
      projectDescription: 'portfolio.PolloLocoText',
      projectLink: 'https://pollo-loco.cecil-cigan.at',
      projectGitHub: 'https://github.com/CecilC90/Pollo-Loco',
      projectImg: 'pollo_loco',
    },
  ];
  translateProjectDescriptions() {
    this.projects.forEach((project) => {
      project.projectDescription = this.translateService.instant(
        project.projectDescription
      );
    });
  }
}
