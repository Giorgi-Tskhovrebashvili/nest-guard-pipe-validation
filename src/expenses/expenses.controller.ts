import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpenseDto } from './dtos/expense.dto';
import { ExpensesGuard } from './guards/expenses.guard';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) { }
    
    @Get()
    findAllExpenses() {
        return this.expensesService.findAllExpenses();
    }

    @Get(':id')
    findOneExpense(@Param('id', ParseIntPipe) id: string) {
        return this.expensesService.findOneExpense(+id);
    }

    @Post('/add')
    @UseGuards(ExpensesGuard)
    createExpense(@Body() body: ExpenseDto) { 
        return this.expensesService.createExpense(body);
    }

    @Put(':id')
    @UseGuards(ExpensesGuard)
    updateExpenses(@Param('id', ParseIntPipe) id: string, @Body() body: ExpenseDto) {
        return this.expensesService.updateExpenses(id, body);
    }

    @Delete(':id')
    @UseGuards(ExpensesGuard)
    removeExpense(@Param('id', ParseIntPipe) id: string) { 
        return this.expensesService.removeExpense(id);
    }
}
