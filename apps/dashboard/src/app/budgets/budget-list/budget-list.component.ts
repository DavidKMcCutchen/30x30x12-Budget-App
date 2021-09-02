import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expense } from "@budget-app/api-interfaces";

@Component({
  selector: 'budget-app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class ExpenseListComponent {
  @Input() expenses: Expense[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() expenseViewed = new EventEmitter();
}
