import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Expense } from "@budget-app/api-interfaces";
import { ExpensesService } from "@budget-app/core-data";
import * as ExpenseActions from './budgets.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class ExpenseEffects{
    loadExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActions.loadExpense),
            fetch({
                run: (action) =>
                    this.expensesService
                        .find(action.expenseId)
                        .pipe(map((expense: Expense) => ExpenseActions.loadExpenseSuccess({ expense }))),
                    onError: (action, error) => ExpenseActions.loadExpenseFailed({ error })    
            })
        ));
    loadExpenses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActions.loadExpenses),
            fetch({
                run: () =>
                    this.expensesService
                    .all()
                    .pipe(
                        map((expenses: Expense[]) => ExpenseActions.loadExpensesSuccess({ expenses }))
                    ),
                onError: (action, error) => ExpenseActions.loadExpensesFailed({ error })    
            })
        ));
        createExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActions.createExpense),
            pessimisticUpdate({
                run: (action) =>
                    this.expensesService
                        .create(action.expense)
                        .pipe(map((expense: Expense) => ExpenseActions.createExpenseSuccess({ expense }))),
                    onError: (action, error) => ExpenseActions.createExpenseFailed({ error })    
            })
    ));

    updateExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActions.updateExpense),
            pessimisticUpdate({
                run: (action) =>
                    this.expensesService
                        .update(action.expense)
                        .pipe(map((expense: Expense) => ExpenseActions.updateExpenseSuccess({ expense}))),
                    onError: (action, error) => ExpenseActions.updateExpenseFailed({ error })    
            })
    ));

    deleteExpense$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ExpenseActions.deleteExpense),
            pessimisticUpdate({
                run: (action) =>
                    this.expensesService
                        .delete(action.expense)
                        .pipe(
                            map(() => ExpenseActions.deleteExpenseSuccess({ expense: action.expense }))
                        ),
                    onError: (action, error) => ExpenseActions.deleteExpenseFailed({ error })    
            })
        ));    


    constructor(
        private actions$: Actions,
        private expensesService: ExpensesService
    ) {}    
}