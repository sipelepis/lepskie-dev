import {Component, input} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `<button [type]="type()" [disabled]="disabled()" [name]="name()" [value]="value()" [autofocus]="autofocus()" [class]="class()"></button>`,
  styles: ['']
})
export class ButtonComponent {
  type = input<HTMLButtonElement['type']>("button");
  disabled = input<HTMLButtonElement['disabled']>(false);
  name = input<HTMLButtonElement['name']>("");
  value = input<HTMLButtonElement['value']>("");
  autofocus = input<HTMLButtonElement['autofocus']>(false);
  class = input<string>("");

  // Default Styling

}
