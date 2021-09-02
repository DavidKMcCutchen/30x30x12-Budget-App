import { emptyExpense } from "@budget-app/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { expenseAdapter, ExpenseState, EXPENSE_FEATURE_KEY } from "./budgets.reducers";

export const getExpenseState = createFeatureSelector<ExpenseState>(EXPENSE_FEATURE_KEY);

const { selectAll, selectEntities } = expenseAdapter.getSelectors();

export const getExpensesLoaded = createSelector(
    getExpenseState,
    (state: ExpenseState) => state.loaded
);

export const getExpenseError = createSelector(
    getExpenseState,
    (state: ExpenseState) => state.error
);

export const getAllExpenses = createSelector(
    getExpenseState,
    (state: ExpenseState) => selectAll(state)
);

export const getExpenseEntities = createSelector(
    getExpenseState,
    (state: ExpenseState) => selectEntities(state)
);

export const getSelectedExpenseId = createSelector(
    getExpenseState,
    (state: ExpenseState) => state.selectedId
);

export const getSelectedExpense = createSelector(
    getExpenseEntities,
    getSelectedExpenseId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyExpense
);