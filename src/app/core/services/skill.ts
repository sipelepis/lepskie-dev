import {Injectable} from '@angular/core';
import {Skill} from '@core/interface/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  public mySkills: Skill[] = [{
    name: 'Angular',
    description: 'Angular is a platform for building mobile and desktop web applications.',
  }, {
    name: 'Spartan',
    description: 'Spartan is a collection of Angular components and directives.',
  }, {
    name: 'Helm',
    description: 'Helm is a collection of Angular components and directives.',
  }
  ]
}
