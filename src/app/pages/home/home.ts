import {Component, inject} from '@angular/core';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {lucideCheck, lucideChevronDown, lucideChevronRight} from '@ng-icons/lucide';
import {BrnCommandImports} from '@spartan-ng/brain/command';
import {HlmButton} from '@spartan-ng/helm/button';
import {HlmCardFooter, HlmCardImports} from '@spartan-ng/helm/card';
import {HlmCommandImports} from '@spartan-ng/helm/command';
import {HlmInput} from '@spartan-ng/helm/input';
import {HlmLabel} from '@spartan-ng/helm/label';
import {HlmIcon} from '@spartan-ng/helm/icon';
import {ProjectService} from '@core/services/project';
import {SkillService} from '@core/services/skill';

@Component({
  selector: 'app-home',
  imports: [BrnCommandImports, HlmCommandImports, HlmCardImports, HlmLabel, HlmInput, HlmCardFooter, HlmButton, NgIcon, HlmIcon],
  providers: [provideIcons({lucideCheck, lucideChevronDown, lucideChevronRight})],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected pageTitle = "home";
  protected projectService = inject(ProjectService)
  protected skillService = inject(SkillService)

}
