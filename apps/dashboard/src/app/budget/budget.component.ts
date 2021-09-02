import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseFacade } from '@budget-app/core-state';

@Component({
  selector: 'budget-app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class ExpenseComponent implements OnInit {

  currentExpense$ = this.expenseFacade.selectedExpenses$
  

  constructor(
    private expenseFacade: ExpenseFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const expenseId = this.route.snapshot.params.id;
    this.loadExpense(expenseId);
  }

  loadExpense(expenseId: string) {
    this.expenseFacade.selectExpense(expenseId);
    this.expenseFacade.loadExpense(expenseId);
  }

  navigateBack() {
    this.router.navigate(['/expenses']);
  };

}
