import {Component} from '@angular/core';
import {HlmAvatar, HlmAvatarFallback, HlmAvatarImage} from '@spartan-ng/helm/avatar';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [HlmAvatarImage, HlmAvatar,
    NgOptimizedImage, HlmAvatarFallback
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
