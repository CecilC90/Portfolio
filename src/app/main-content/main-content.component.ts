import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AtfComponent } from '../mainContent/atf/atf.component';
import { AboutMeComponent } from '../mainContent/about-me/about-me.component';
import { MySkillsComponent } from '../mainContent/my-skills/my-skills.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, AtfComponent, AboutMeComponent, MySkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
