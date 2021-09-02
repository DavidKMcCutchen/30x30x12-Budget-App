import { ActionReducerMap } from "@ngrx/store";
import * as fromExpenses from './budgets/budgets.reducers';

export interface AppState {
    [fromExpenses.EXPENSE_FEATURE_KEY]: fromExpenses.ExpenseState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromExpenses.EXPENSE_FEATURE_KEY]: fromExpenses.expenseReducer
};