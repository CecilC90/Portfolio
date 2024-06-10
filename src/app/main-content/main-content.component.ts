import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AtfComponent } from '../mainContent/atf/atf.component';
import { AboutMeComponent } from '../mainContent/about-me/about-me.component';
import { MySkillsComponent } from '../mainContent/my-skills/my-skills.component';
import { PortfolioComponent } from '../mainContent/portfolio/portfolio.component';
import { ContactComponent } from '../mainContent/contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    AtfComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
