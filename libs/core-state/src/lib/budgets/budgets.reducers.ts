import { Expense } from "@budget-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as ExpenseActions from './budgets.actions';

export const EXPENSE_FEATURE_KEY = 'expenses';

export interface ExpenseState extends EntityState<Expense> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface ExpensePartialState {
    readonly [EXPENSE_FEATURE_KEY]: ExpenseState
};

export const expenseAdapter: EntityAdapter<Expense> = createEntityAdapter<Expense>();

export const initialExpenseState: ExpenseState = expenseAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): ExpenseState => ({ ...state, error});

const onDispatch = (state, action): ExpenseState => ({
    ...state,
    loaded: false,
    error: null
});

const _expenseReducer = createReducer(
    initialExpenseState,
    on(
        ExpenseActions.loadExpenseFailed,
        ExpenseActions.loadExpensesFailed,
        ExpenseActions.createExpenseFailed,
        ExpenseActions.updateExpenseFailed,
        ExpenseActions.deleteExpenseFailed,
        onFailed
    ),
    on(
        ExpenseActions.loadExpense,
        ExpenseActions.loadExpenses,
        ExpenseActions.createExpense,
        ExpenseActions.updateExpense,
        ExpenseActions.deleteExpense,
        onDispatch
    ),
    on(
        ExpenseActions.loadExpenseSuccess, (state, { expense }) =>
        expenseAdapter.upsertOne(expense, {...state, loaded: true})
    ),
    on(
        ExpenseActions.selectExpense, (state, { expenseId }) => ({
            ...state,
            selectedId: expenseId
        })
    ),
    on(
        ExpenseActions.loadExpensesSuccess, (state, { expenses }) =>
        expenseAdapter.setAll(expenses, {...state, loaded: true})
    ),
    on(
        ExpenseActions.deleteExpenseSuccess, (state, { expense }) =>
        expenseAdapter.removeOne(expense.id, {...state, loaded: true})
    ),
    on(
        ExpenseActions.updateExpenseSuccess, (state, { expense }) =>
        expenseAdapter.updateOne(
            {id: expense.id, changes: expense},
            {...state, loaded: true}
        )
    ),
    on(
        ExpenseActions.createExpenseSuccess, (state, {expense }) =>
        expenseAdapter.addOne(expense, {...state, loaded: true})
    ),
)

export function expenseReducer(
    state: ExpenseState | undefined,
    action: Action
) {
    return _expenseReducer(state, action)
}