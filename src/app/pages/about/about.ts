import {Component} from '@angular/core';
import {HlmAvatar, HlmAvatarFallback, HlmAvatarImage} from '@spartan-ng/helm/avatar';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    HlmAvatarImage,
    NgOptimizedImage,
    HlmAvatar,
    HlmAvatarFallback
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  protected pageTitle = "home";

}
