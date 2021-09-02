import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseFacade } from '@budget-app/core-state';
import { Expense } from "@budget-app/api-interfaces";

@Component({
  selector: 'budget-app-budget-info',
  templateUrl: './budget-info.component.html',
  styleUrls: ['./budget-info.component.scss']
})
export class ExpenseInfoComponent {

  @Input() expense: Expense | null;


  constructor(
    private expenseFacade: ExpenseFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/expenses']);
  };

}
