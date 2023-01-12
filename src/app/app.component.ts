import { Component } from '@angular/core';
import {RandomImageComponent} from "./components/atoms/random-image.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Random image generator</h1>
    <app-random-image></app-random-image>
  `,
  imports: [RandomImageComponent]
})
export class AppComponent {
}
