import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonalInfo, SocialLink, Skill, Project, Experience, Education, Tools, Language } from '../models/portfolio.model';

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
          description: 'Marketplace de productos agrícolas en formato app web',
          image: 'assets/images/proyects/faneca-iphone.png',
          technologies: ['Angular', 'Bootstrap', 'Node.js', 'Supabase', 'Firebase', 'OpenStreetMap', 'Email sender', 'Google analytics', 'Github'],
          liveUrl: 'https://faneca.app/',
          githubUrl: 'https://github.com/juanmah98/faneca-app',
          featured: true
        },
        {
          id: '2',
          title: 'Fidelity cards',
          description: 'Aplicación web de fidelización de clientes digital con QR',
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
            description: 'App móvil para una fintech desarrollada con flutter',
            image: 'assets/images/proyects/Tera.png',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Android Studio', 'GitLab', 'Trello'],
            liveUrl: 'https://www.linkedin.com/company/sg-financial-technology/',
            githubUrl: '',
            featured: false
          },
          {
            id: '6',
            title: 'PelisUp',
            description: 'Proyecto web de películas y series. Desafío de curso de Angular con "Folcode"',
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
            company: 'Self Employed - part time',
            position: 'Desarrollador web',
            startDate: '2021-01',
            current: true,
            description: 'Desarrollo de aplicaciones web y móviles usando tecnologías modernas',
            technologies: ['Angular 14, 18, 19', 'Node.js', 'Firebase',  'Supabase', 'Edge functions', 'Github', 'Figma', 'Email sender', 'Google analytics']
          },
      {
        id: '2',
        company: 'La piazzetta',
        position: 'Encargado de cafetería',
        startDate: '2022-11',
        current: true,
        description: 'Encargado de cafetería. Atención al cliente, recepción de pedidos, manejo de caja, organización de horarios, pago de proveedores, pago de empleados, etc.',
        technologies: ['']
      },
      
      {
        id: '3',
        company: 'Makers',
        position: 'Front-end Developer Flutter',
        startDate: '2022-01',
        endDate: '2022-08',
        current: false,
        description: 'Contribuí al desarrollo remoto de una aplicación de billetera virtual utilizando Flutter/Dart. Lideré la implementación de nuevos diseños, funcionalidades y rediseños de secciones, aplicando conexiones con APIs a través del método bloc.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'C#', 'Android Studio', 'GitLab', 'Trello']
      },
      {
        id: '4',
        company: 'San Juan TEC - Híbrido',
        position: 'Instructor de curso. Fundamentos de Angular',
        startDate: '2022-02',
        endDate: '2022-08',
        current: false,
        description: 'Impartí conocimientos fundamentales del framework Angular a estudiantes. Facilité la instalación de Node.js y el CLI de Angular para los participantes. Introduje el uso de TypeScript para una implementación eficaz. Coordiné el despliegue de los proyectos finales en Vercel para su visualización en tiempo real.',
        technologies: ['Angular 14', 'TypeScript', 'Firebase', 'Vercel', 'GitHub']
      },
      {
        id: '5',
        company: 'Rapanui Lomos',
        position: 'Encargado de local gastronómico',
        startDate: '2017-08',
        endDate: '2022-02',
        current: false,
        description: 'Encargado de local gastronómico. Atención al cliente, recepción de pedidos, atención a meseros, etc.',
        technologies: ['']
      },
      {
        id: '6',
        company: 'Trabajo Autónomo',
        position: 'Técnico en Reparación y Mantenimiento de PC',
        startDate: '2017-06',
        endDate: '2020-06',
        current: false,
        description: 'Mantenimiento integral de computadoras de escritorio, notebooks y all-in-one. Especializado en formateo y instalación de sistemas operativos a medida. Instalación precisa de drivers y software según las preferencias del cliente.',
        technologies: ['Windows', 'Linux', 'MacOS', 'Hardware', 'Software', 'Drivers', 'Formateo', 'Instalación de sistemas operativos', 'Instalación de software', 'Instalación de drivers']
      },

    ];
    
    return of(experience);
  }

  getEducation(): Observable<Education[]> {
    const education: Education[] = [
      {
        id: '1',
        institution: 'Escuela Mastermedia',
        degree: 'Master en diseño web y programación',
        startDate: '2022-11',
        endDate: '2023-11',
        current: false,
        description: 'Máster en diseño web y Programación Full Stack (DWP)'
      },
      {
        id: '2',
        institution: 'Folcademy',
        degree: 'Front-end Developer',
        startDate: '2022-01',
        endDate: '2022-04',
        current: false,
        description: 'Curso orientado al desarrollo web front-end con Angular cli. Se realizaron tareas como creación de un proyecto desde 0 con Angular, implementación de servicios para consumir una API rest, desarrollo de inicio de sesión con Google y uso de una base de datos con Firebase'
      },
      {
        id: '3',
        institution: 'Folcademy',
        degree: 'Backend developer',
        startDate: '2021-08',
        endDate: '2022-12',
        current: false,
        description: 'Tuvimos muchos desafíos cada semana muy interesantes, como proyecto final creamos una api rest, que puede almacenar datos de pacientes, médicos y generar turnos entre ellos.'
      },
      {
        id: '4',
        institution: 'San Juan TEC',
        degree: 'Angular developer',
        startDate: '2021-08',
        endDate: '2022-12',
        current: false,
        description: 'Curso introductorio al framework Angular desde 0. Implementación de node.js y angular cli. Desarrollo de un proyecto final, encargado de crear el proyecto con angular, pasar archivos html, js y css. También conectar la api de la nasa y subirlo a firebase'
      },
      {
        id: '5',
        institution: 'Universidad Nacional de San Juan',
        degree: 'Licenciatura en ciencias de la computacion',
        startDate: '2017-03',
        endDate: '2020-03',
        current: false,
        description: 'Introducción a la programación y al desarrollo de software'
      },
      {
        id: '6',
        institution: 'Instituto Cervantes',
        degree: 'Certificado Reparación y Armado de PC.',
        startDate: '2017-03',
        endDate: '2017-12',
        current: false,
        description: 'Curso introductorio a la reparación y armado de pc'
      }
    ];
    
    return of(education);
  }

  getLanguages(): Observable<Language[]> {
    const languages: Language[] = [
      {
        id: '1',
        name: 'Español',
        level: 'Nativo',
        proficiency: 100
      },
      {
        id: '2',
        name: 'Inglés',
        level: 'Intermedio',
        proficiency: 60
      },
      {
        id: '3',
        name: 'Aleman',
        level: 'Básico',
        proficiency: 15
      }
    ];
    
    return of(languages);
  }
}
