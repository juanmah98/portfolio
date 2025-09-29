import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill, Tools } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  skills: Skill[] = [];
  tools: Tools[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
    
    this.portfolioService.getTools().subscribe(tools => {
      this.tools = tools;
    });
  }
}
