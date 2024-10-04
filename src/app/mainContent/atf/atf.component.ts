import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss'],
})
export class AtfComponent implements OnInit, OnDestroy {
  private translateService = inject(TranslateService);
  currentLang!: string;
  private langChangeSubscription!: Subscription;

  ngOnInit(): void {
    // Initialisiert die aktuelle Sprache
    this.currentLang = localStorage.getItem('language') || 'en';
    this.translateService.use(this.currentLang);

    // Abonniere Sprachänderungen
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang; // Sprache wird aktualisiert
    });
  }

  // Prüft, ob die aktive Sprache Deutsch ist
  isGerman(): boolean {
    return this.currentLang === 'de';
  }

  ngOnDestroy(): void {
    // Unsubscribe, um Speicherlecks zu vermeiden
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
