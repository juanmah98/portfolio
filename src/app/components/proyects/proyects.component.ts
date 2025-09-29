import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent implements OnInit {
  projects: Project[] = [];
  
  constructor(private portfolioService: PortfolioService) {}
  
  ngOnInit() {
    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}
