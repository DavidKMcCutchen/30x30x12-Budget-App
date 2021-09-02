export interface Expense {
  id: string;
  name: string;
  value: string;
  paid: boolean;
};

export const emptyExpense = {
  id: '',
  name: '',
  value: '',
  paid: false
};
