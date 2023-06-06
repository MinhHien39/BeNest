import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pay_rates' })
export class Payrate {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @Type(() => Number)
  idPay_Rates: number;
  @Column()
  @IsString()
  Pay_Rate_Name: string;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Value: number;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Tax_Percentage: number;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Pay_Type: number;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Pay_Amount: number;
  @Column()
  @IsNumber()
  @Type(() => Number)
  PT_Level_C: number;
}
