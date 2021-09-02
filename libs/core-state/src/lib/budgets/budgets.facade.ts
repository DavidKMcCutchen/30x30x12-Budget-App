import { Injectable } from "@angular/core";
import { Expense } from "@budget-app/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as ExpenseActions from './budgets.actions';
import * as ExpenseSelectors from './budgets.selectors';
import * as fromExpenses from './budgets.reducers';


@Injectable({
    providedIn: 'root'
})

export class ExpenseFacade {
    allExpenses$ = this.store.pipe(
        map((state) => ExpenseSelectors.getAllExpenses(state)),
    )
    selectedExpenses$ = this.store.pipe(select(ExpenseSelectors.getSelectedExpense));
    loaded$ = this.store.pipe(select(ExpenseSelectors.getExpensesLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === ExpenseActions.createExpense({} as any) .type ||
        action.type === ExpenseActions.updateExpense({} as any) .type ||
        action.type === ExpenseActions.deleteExpense({} as any) .type 
        ))

        selectExpense(expenseId: string) {
            this.dispatch(ExpenseActions.selectExpense({ expenseId }));
        };

        loadExpenses() {
            this.dispatch(ExpenseActions.loadExpenses())
        };

        loadExpense(expenseId: string) {
            this.dispatch(ExpenseActions.loadExpense({ expenseId }))
        };

        saveExpense(expense: Expense) {
            expense.id ? this.updateExpense(expense) : this.createExpense(expense)
        };

        createExpense(expense: Expense) {
            this.dispatch(ExpenseActions.createExpense({ expense }))
        };

        updateExpense(expense: Expense) {
            this.dispatch(ExpenseActions.updateExpense({ expense }))
        };

        deleteExpense(expense: Expense) {
            this.dispatch(ExpenseActions.deleteExpense({ expense }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromExpenses.ExpensePartialState>,
            private actions$: ActionsSubject
        ) {}
}