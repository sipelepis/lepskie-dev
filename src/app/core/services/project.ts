import {Injectable} from '@angular/core';
import {Project} from '@core/interface/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public myProjects: Project[] = [
    {
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      link: 'https://angular.io',
      technologies: ["Angular 20", "TailwindCSS 4.0"],
      images: ['https://angular.io/assets/images/logos/angular/angular.svg']
    },
    {
      name: 'Spartan',
      description: 'Spartan is a collection of Angular components and directives.',
      link: 'https://spartan-ng.com',
      technologies: ["Angular 20", "TailwindCSS 4.0"],
      images: ['https://angular.io/assets/images/logos/angular/angular.svg']

    },
    {
      name: 'Helm',
      description: 'Helm is a collection of Angular components and directives.',
      link: 'https://helm.spartan-ng.com',
      technologies: ["Angular 20", "TailwindCSS 4.0"],
      images: ['https://angular.io/assets/images/logos/angular/angular.svg']

    },
  ]
}
