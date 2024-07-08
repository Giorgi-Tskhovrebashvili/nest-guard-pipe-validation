import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExpenseDto } from './dtos/expense.dto';

@Injectable()
export class ExpensesService {
  private readonly expenses = [
    { id: 1, title: 'Book', amount: '$10' },
    { id: 2, title: 'Pen', amount: '$2' },
    { id: 3, title: 'Notebook', amount: '$5' },
  ];

  createExpense(expense: ExpenseDto) {
    const newExpense = {
      id: this.expenses.length + 1,
      title: expense.title,
      amount: expense.amount,
    };
    this.expenses.push(newExpense);
    return this.expenses;
  }

  findAllExpenses() {
    return this.expenses;
  }

  findOneExpense(id: number) {
    const expense = this.expenses.find((u) => u.id === id);
    if (!expense) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return expense;
  }

  updateExpenses(id: string, body: ExpenseDto) {
    const { title, amount } = body;
    const findExpense = this.expenses.find((u) => u.id === parseInt(id));
    const updateExpense = {
      ...findExpense,
      title,
      amount,
    };
    if (!findExpense) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return updateExpense;
  }

  removeExpense(id: string) {
    const expense = this.expenses.find((u) => u.id === parseInt(id));
    if (!expense) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
      this.expenses.splice(this.expenses.indexOf(expense), 1);
      throw new HttpException('expense deleted succesfuly', HttpStatus.OK)
  }
}
