import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AtfComponent } from '../mainContent/atf/atf.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, AtfComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
