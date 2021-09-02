import { createAction, props } from "@ngrx/store";
import {  Expense } from "@budget-app/api-interfaces";

// Select Entity

export const selectExpense = createAction(
    '[EXPENSE] Select Expense',
    props<{ expenseId: string }>()
);

// Load all Entities

export const loadExpenses = createAction(
    '[EXPENSE] Load Expenses'
);

export const loadExpensesSuccess = createAction(
    '[EXPENSE] Load Expenses Success',
    props<{ expenses: Expense[]}>()
);

export const loadExpensesFailed = createAction(
    '[EXPENSE] Load Expenses Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadExpense = createAction(
    '[EXPENSE] Load Expense',
    props<{ expenseId: string}>()
);

export const loadExpenseSuccess = createAction(
    '[EXPENSE] Load Expense Success',
    props<{ expense: Expense}>()
);

export const loadExpenseFailed = createAction(
    '[EXPENSE] Load Expense Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createExpense = createAction(
    '[EXPENSE] Create Expense',
    props<{ expense: Expense}>()
);

export const createExpenseSuccess = createAction(
    '[EXPENSE] Create Expense Success',
    props<{ expense: Expense}>()
);

export const createExpenseFailed = createAction(
    '[EXPENSE] Create Expense Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateExpense = createAction(
    '[EXPENSE] Update Expense',
    props<{ expense: Expense}>()
);

export const updateExpenseSuccess = createAction(
    '[EXPENSE] Update Expense Success',
    props<{ expense: Expense}>()
);

export const updateExpenseFailed = createAction(
    '[EXPENSE] Create Expense Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteExpense = createAction(
    '[EXPENSE] Delete Expense',
    props<{ expense: Expense}>()
);

export const deleteExpenseSuccess = createAction(
    '[EXPENSE] Delete Expense Success',
    props<{ expense: Expense}>()
);

export const deleteExpenseFailed = createAction(
    '[EXPENSE] Create Expense Failed',
    props<{ error: any}>()
);