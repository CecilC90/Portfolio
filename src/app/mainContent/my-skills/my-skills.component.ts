import { Component, OnInit, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {
  private translateService = inject(TranslateService); 

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.use(defaultLang);
  }
icons = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-Api', 'Scrum', 'Material Design'];


}
