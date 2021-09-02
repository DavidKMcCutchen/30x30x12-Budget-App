import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ExpensesComponent } from './budgets/budgets.component';
import { ExpenseDetailsComponent } from './budgets/budget-details/budget-details.component';
import { ExpenseListComponent } from './budgets/budget-list/budget-list.component';
import { MaterialModule } from "@budget-app/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@budget-app/core-data";
import { CoreStateModule } from "@budget-app/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@budget-app/environment';
import { UiLoginModule } from '@budget-app/ui-login';
import { ExpenseComponent } from './budget/budget.component';
import { ExpenseInfoComponent } from './budget/budget-info/budget-info.component';

@NgModule({
  declarations: [AppComponent, ExpensesComponent, ExpenseDetailsComponent, ExpenseListComponent, ExpenseInfoComponent, ExpenseComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}