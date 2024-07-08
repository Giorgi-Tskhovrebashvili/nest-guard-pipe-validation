import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';

@Module({
  imports: [],
  providers: [ExpensesService],
  controllers: [ExpensesController]
})
export class ExpensesModule {}
