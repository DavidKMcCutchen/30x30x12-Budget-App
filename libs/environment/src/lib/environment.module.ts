import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUDGET_ENVIRONMENT } from './budget.token';
import { BudgetEnvironment } from "./budget.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: BudgetEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: BUDGET_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}