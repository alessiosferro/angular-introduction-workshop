import { Component } from '@angular/core';
import {from, of} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <p>{{ lorem | titlecase }}</p>

    <p>Capodanno 2023: {{ date | date:'dd MMM YY'}}</p>

    <ul *ngIf="showItems; else noItemsShown">
      <li *ngFor="let item of items$ | async">{{ item }}</li>
    </ul>

    <ng-template #noItemsShown>
      <p>No items</p>
    </ng-template>
  `
})
export class AppComponent {
  title = 'angular-introduction-workshop';

  lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, eaque?';

  date = new Date(2023, 0, 1);

  showItems = true;

  items$ = of([1, 2, 3, 4, 5]);
}
