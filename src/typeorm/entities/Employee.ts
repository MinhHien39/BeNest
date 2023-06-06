import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'employee' })
export class Employee {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @Type(() => Number)
  idEmployee: number;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Employee_Number: number;
  @Column()
  @IsNumber()
  @Type(() => Number)
  PayRates_id: number;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Vacation_Days: number;
  @Column()
  @IsString()
  Paid_To_date: string;
  @Column()
  @IsString()
  Last_Name: string;
  @Column()
  @IsString()
  First_Name: string;
  @Column()
  @IsNumber()
  @Type(() => Number)
  SSN: number;
  @Column()
  @IsString()
  Pay_Rate: string;
  @Column()
  @IsString()
  Paid_Last_Year: string;
}
