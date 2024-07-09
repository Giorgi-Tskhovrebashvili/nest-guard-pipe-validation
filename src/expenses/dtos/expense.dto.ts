import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ExpenseDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
