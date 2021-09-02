import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Expense } from "@budget-app/api-interfaces";
import { BudgetEnvironment, BUDGET_ENVIRONMENT } from "@budget-app/environment";


@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  model = 'expenses';

  constructor(
    private httpClient: HttpClient,
    @Inject(BUDGET_ENVIRONMENT) private environment: BudgetEnvironment
  ) {}

  all() {
    return this.httpClient.get<Expense[]>(this.getUrl())
  };

  find(expenseId: string) {
    return this.httpClient.get<Expense>(this.getUrlById(expenseId))
  };

  create(expenses: Expense) {
    return this.httpClient.post<Expense>(this.getUrl(), expenses)
  };

  update(expenses: Expense) {
    return this.httpClient.patch<Expense>(this.getUrlById(expenses.id), expenses)
  };

  delete({ id }: Expense) {
    return this.httpClient.delete<Expense>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}