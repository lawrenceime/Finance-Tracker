export type CategoryType = 'Food' | 'Transport' | 'Rent' | 'Entertainment' | 'Utilities' | 'Income';

export interface Transaction {
  id: string;
  amount: number;
  category: CategoryType;
  description: string;
  date: string;
  type: 'income' | 'expense';
}

export interface Budget {
  category: Exclude<CategoryType, 'Income'>; 
  limit: number;
}

export interface FinanceState {
  transactions: Transaction[];
  budgets: Record<string, number>; 
}