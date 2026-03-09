'use client';
import { useState, useEffect } from 'react';
import { Transaction, CategoryType } from '../types';


const INITIAL_BUDGETS: Record<string, number> = {
  Food: 500,
  Transport: 200,
  Rent: 1500,
  Entertainment: 300,
  Utilities: 400,
};

export const useFinance = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<Record<string, number>>(INITIAL_BUDGETS);


  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    const savedBudgets = localStorage.getItem('budgets');
    
    if (savedTransactions) setTransactions(JSON.parse(savedTransactions));
    if (savedBudgets) setBudgets(JSON.parse(savedBudgets));
  }, []);


  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [transactions, budgets]);


  const addTransaction = (newTx: Omit<Transaction, 'id'>) => {
    const transactionWithId = { ...newTx, id: crypto.randomUUID() };
    setTransactions((prev) => [transactionWithId, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter(t => t.id !== id));
  };

  const updateBudget = (category: string, amount: number) => {
    setBudgets(prev => ({ ...prev, [category]: amount }));
  };


  const totals = transactions.reduce((acc, tx) => {
    if (tx.type === 'income') acc.income += tx.amount;
    else acc.expenses += tx.amount;
    return acc;
  }, { income: 0, expenses: 0 });

  const getSpentByCategory = (category: string) => {
    return transactions
      .filter(tx => tx.category === category && tx.type === 'expense')
      .reduce((sum, tx) => sum + tx.amount, 0);
  };

  return {
    transactions,
    budgets,
    totals,
    addTransaction,
    deleteTransaction,
    updateBudget,
    getSpentByCategory,
    balance: totals.income - totals.expenses
  };
};