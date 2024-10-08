import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private translateService = inject(TranslateService);

  http = inject(HttpClient);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.use(defaultLang);
  }

  public isChecked = false;
  emailSentSuccessfully = false;


  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://cecil-cigan.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  toggleCheckbox(event: Event): void {
    this.isChecked = (event.target as HTMLInputElement).checked;
    this.contactData.privacy = this.isChecked;
    console.log(this.isChecked);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('E-Mail erfolgreich gesendet:', response);
            ngForm.resetForm();
            this.isChecked = false;
            this.emailSentSuccessfully = true;
            setTimeout(() => {
              this.emailSentSuccessfully = false;
            }, 3000);  // Nach 3 Sekunden den ursprünglichen Text wiederherstellen
          },
          error: (error) => {
            console.error('Fehler beim Senden der E-Mail:', error);
          },
          complete: () => console.info('E-Mail Sendevorgang abgeschlossen'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('Formulartest - Mail wurde nicht versendet.');
      ngForm.resetForm();
    } else {
      console.warn(
        'Das Formular ist ungültig oder wurde noch nicht übermittelt.'
      );
    }
  }
}
