import { Component, OnInit, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  private translateService = inject(TranslateService);  

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.use(defaultLang);
  }
}
