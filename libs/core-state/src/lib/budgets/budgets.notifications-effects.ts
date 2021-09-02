import { Injectable } from '@angular/core';
import { NotificationsService } from '@budget-app/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as ExpensesActions from './budgets.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ExpensesActions.createExpenseSuccess),
        tap(() => this.notificationService.notify('Create Expense Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ExpensesActions.updateExpenseSuccess),
        tap(() => this.notificationService.notify('Update Expense Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ExpensesActions.deleteExpenseSuccess),
        tap(() => this.notificationService.notify('Delete Expense Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
