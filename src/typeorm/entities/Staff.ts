import { Transform, Type } from 'class-transformer';
import { IsNumber, IsNumberString, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'staff' })
export class Staff {
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
  @Column()
  @IsString()
  Middle_initial: string;
  @Column()
  @IsString()
  Address1: string;
  @Column()
  @IsString()
  Address2: string;
  @Column()
  @IsString()
  City: string;
  @Column()
  @IsString()
  State: string;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Zip: number;
  @Column()
  @IsString()
  Email: string;
  @Column()
  @IsString()
  Phone_Number: string;
  @Column()
  @IsString()
  Social_Security_Number: string;
  @Column()
  @IsString()
  Drivers_License: string;
  @Column()
  @IsString()
  Marital_Status: string;
  @Column()
  @IsString()
  Gender: string;
  @Column()
  @IsString()
  Shareholder_Status: string;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Benefit_Plans: number;
  @Column()
  @IsString()
  Ethnicity: string;
}
