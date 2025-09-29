import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonalInfo, SocialLink, Skill, Project, Experience, Education, Tools } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  constructor() { }

  getPersonalInfo(): Observable<PersonalInfo> {
    // Datos de ejemplo - reemplaza con tus datos reales
    const personalInfo: PersonalInfo = {
      name: 'Juan Manuel',
      title: 'Desarrollador frontend',
      description: 'Desarrollador apasionado por crear soluciones web innovadoras y eficientes.',
      email: 'juanmah1998@ejemplo.com',
      phone: '+34 674 550 317',
      location: 'Valencia, España',
      profileImage: 'assets/images/profile.jpg'
    };
    
    return of(personalInfo);
  }

  getSocialLinks(): Observable<SocialLink[]> {
    const socialLinks: SocialLink[] = [
      {
        name: 'GitHub',
        url: 'https://github.com/juanmah',
        icon: 'github'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/juanmah',
        icon: 'linkedin'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/juanmah',
        icon: 'twitter'
      }
    ];
    
    return of(socialLinks);
  }

  getSkills(): Observable<Skill[]> {
    const skills: Skill[] = [
      { name: 'Angular', level: 90, category: 'Frontend' },
      { name: 'TypeScript', level: 85, category: 'Frontend' },
      { name: 'Css / Scss', level: 85, category: 'Frontend' },
      { name: 'Node.js', level: 80, category: 'Backend' },
      { name: 'Flutter', level: 35, category: 'Frontend' },
      { name: 'Dart', level: 35, category: 'Frontend' },
      { name: 'React', level: 30, category: 'Database' },
      { name: 'C#', level: 25, category: 'Backend' },
    ];
    
    return of(skills);
  }

  getTools(): Observable<Tools[]> {
    const tools: Tools[] = [
      { name: 'Visual Studio Code', img: 'assets/images/tools/visual.png' },
      { name: 'Figma', img: 'assets/images/tools/figma.png' },
      { name: 'Android Studio', img: 'assets/images/tools/android.png' },
      { name: 'GitHub', img: 'assets/images/tools/github.png' },
      { name: 'Firebase', img: 'assets/images/tools/firebase.png' },
      { name: 'LinkedIn', img: 'assets/images/tools/linkedin.png' },
      { name: 'Photoshop', img: 'assets/images/tools/photoshop.png' },
      { name: 'Linux', img: 'assets/images/tools/linux.png' },
      { name: 'WordPress', img: 'assets/images/tools/worpdress.png' },
      { name: 'Bitbucket', img: 'assets/images/tools/bitbucket.png' },
    ];
    
    return of(tools);
  }

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
        {
          id: '1',
          title: 'Faneca',
          description: 'Market place de productos agricolas en formato app web',
          image: 'assets/images/proyects/faneca-iphone.png',
          technologies: ['Angular', 'Bootstrap', 'Node.js', 'Supabase', 'Firebase', 'OpenStreetMap', 'Email sender', 'Google analytics', 'Github'],
          liveUrl: 'https://faneca.app/',
          githubUrl: 'https://github.com/juanmah98/faneca-app',
          featured: true
        },
        {
          id: '2',
          title: 'Fidelity cards',
          description: 'Aplicacion web de fidelidad de clientes digiral con QR',
          image: 'assets/images/proyects/fidelity.png',
          technologies: ['Angular', 'Bootstrap', 'Node.js', 'Supabase', 'Firebase', 'Qr code', 'Email sender', 'Qz try', 'Google analytics', 'Github'],
          liveUrl: 'https://fidecards.com/',
          githubUrl: 'https://github.com/juanmah98/coffeeCard',
          featured: true
        },
        {
            id: '3',
            title: 'Bitcode',
            description: 'Landing web de una empresa de desarrollo digital',
            image: 'assets/images/proyects/bricode.png',
            technologies: ['Angular', 'Bootstrap', 'Node.js', 'Supabase', 'Firebase', 'Email sender', 'Google analytics', 'Github'],
            liveUrl: 'https://bricode-sj.web.app/',
            githubUrl: 'https://github.com/juanmah98/Bri-Code',
            featured: false
          },
          {
            id: '4',
            title: 'Matea bags',
            description: 'Landing web de una empresa de bolsos',
            image: 'assets/images/proyects/matea.png',
            technologies: ['Angular', 'Bootstrap', 'Node.js', 'Supabase', 'Firebase', 'Email sender', 'Google analytics', 'Github'],
            liveUrl: 'https://tecnica-cfc73.web.app/',
            githubUrl: 'https://github.com/juanmah98/mateabags',
            featured: false
          },
          {
            id: '5',
            title: 'Tera app',
            description: 'App movil para una fintech desarrollada con flutter',
            image: 'assets/images/proyects/Tera.png',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Android Studio', 'GitLab', 'Trello'],
            liveUrl: 'https://www.linkedin.com/company/sg-financial-technology/',
            githubUrl: '',
            featured: false
          },
          {
            id: '6',
            title: 'PelisUp',
            description: 'Proyecto web de peliculas y series. Desafio de curso de Angular con "Folcode"',
            image: 'assets/images/proyects/PelisUp.png',
            technologies: ['Angular', 'Node.js', 'Vercel'],
            liveUrl: 'https://nuevo-theta.vercel.app/',
            githubUrl: '',
            featured: false
          },
          {
            id: '7',
            title: 'Lubricentro Lopez',
            description: 'Landing web de un lubricentro',
            image: 'assets/images/proyects/Lubri.png',
            technologies: ['Angular', 'Node.js', 'Github'],
            liveUrl: 'https://nuevo-theta.vercel.app/',
            githubUrl: 'https://github.com/juanmah98/Lubribri/tree/master',
            featured: false
          },
          {
            id: '8',
            title: 'Onno',
            description: 'MVP de una app para tomar comandas de restaurantes',
            image: 'assets/images/proyects/Onno.png',
            technologies: ['Angular', 'Node.js', 'Firebase', 'Supabase', 'Github'],
            liveUrl: 'https://piazzeta-c2f38.web.app/',
            githubUrl: 'https://github.com/juanmah98/OnnoRapanui',
            featured: false
          },
          
    ];
    
    return of(projects);
  }

  getExperience(): Observable<Experience[]> {
    const experience: Experience[] = [
      {
        id: '1',
        company: 'Tech Solutions S.L.',
        position: 'Desarrollador Full Stack',
        startDate: '2022-01',
        current: true,
        description: 'Desarrollo de aplicaciones web y móviles usando tecnologías modernas',
        technologies: ['Angular', 'React', 'Node.js', 'AWS']
      },
      {
        id: '2',
        company: 'StartupXYZ',
        position: 'Desarrollador Frontend',
        startDate: '2020-06',
        endDate: '2021-12',
        current: false,
        description: 'Desarrollo de interfaces de usuario y experiencia de usuario',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS']
      }
    ];
    
    return of(experience);
  }

  getEducation(): Observable<Education[]> {
    const education: Education[] = [
      {
        id: '1',
        institution: 'Universidad Tecnológica',
        degree: 'Ingeniería en Sistemas',
        startDate: '2016-09',
        endDate: '2020-06',
        current: false,
        description: 'Especialización en desarrollo de software y arquitectura de sistemas'
      }
    ];
    
    return of(education);
  }
}
