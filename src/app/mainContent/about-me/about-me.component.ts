import { Component, OnInit, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.use(defaultLang);
  }
}
