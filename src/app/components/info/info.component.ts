import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience, Education, Language } from '../../models/portfolio.model';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  experiences: Experience[] = [];
  education: Education[] = [];
  languages: Language[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getExperience().subscribe(experiences => {
      this.experiences = experiences;
    });

    this.portfolioService.getEducation().subscribe(education => {
      this.education = education;
    });

    this.portfolioService.getLanguages().subscribe(languages => {
      this.languages = languages;
    });
  }
}
