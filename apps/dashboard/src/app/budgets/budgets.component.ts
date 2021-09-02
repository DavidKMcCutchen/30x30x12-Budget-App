import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Expense, emptyExpense} from '@budget-app/api-interfaces';
import { ExpenseFacade } from '@budget-app/core-state';
import { Observable } from 'rxjs';



@Component({
  selector: 'budget-app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class ExpensesComponent implements OnInit {
  allExpenses$: Observable<Expense[]> = this.expenseFacade.allExpenses$;
  selectedExpense$: Observable<Expense> = this.expenseFacade.selectedExpenses$;

  form: FormGroup;

  constructor(
    private expenseFacade: ExpenseFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.expenseFacade.mutations$.subscribe((_) => this.resetExpense());
  }

  ngOnInit() {
    this.initForm();
    this.expenseFacade.loadExpenses();
    this.resetExpense()

    const expenseRouteId = this.route.snapshot.params['id'];

    if (expenseRouteId) {
      this.loadExpense((expenseRouteId))
    }
  }

  viewExpense(expenseId: string) {
    this.router.navigate(["expenses", expenseId])
  }

  loadExpense(expenseId: string) {
    this.expenseFacade.selectExpense(expenseId);
    this.expenseFacade.loadExpense(expenseId);
  }

  selectExpense(expense: Expense) {
    this.expenseFacade.selectExpense(expense.id)
    this.form.patchValue(expense);
  }

  saveExpense(expense: Expense) {
    this.expenseFacade.saveExpense(expense);
  }

  deleteExpense(expense: Expense) {
    this.expenseFacade.deleteExpense(expense);
  }

  resetExpense() {
    this.form.reset();
    this.selectExpense(emptyExpense)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      value: [''],
      paid: [''],
      
    })
  }
}
