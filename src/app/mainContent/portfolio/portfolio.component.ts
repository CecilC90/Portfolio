import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  projects = [
    {
      projectName: 'Join',
      projectTechnologie: 'HMTL | CSS | JavaScript',
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      projectLink: '',
      projectGitHub: '',
      projectImg: 'join'

    },
    {
      projectName: 'El Pollo Loco',
      projectTechnologie: 'HMTL | CSS | JavaScript',
      projectDescription: 'A simple Jump-and-run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the chicken.',
      projectLink: '',
      projectGitHub: '',
      projectImg: 'pollo_loco'
      
    }
  ]

}
