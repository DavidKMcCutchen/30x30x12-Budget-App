import { Component } from '@angular/core';


@Component({
  selector: 'budget-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Expenses';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'expenses', icon: 'view_list', title: 'Expenses'}
  ]
}
