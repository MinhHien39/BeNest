import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsInt, IsNumber, IsString } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateStaffDto {
  @IsString()
  Employee_Number: string;
  @IsNumber()
  @Type(() => Number)
  PayRates_id: number;
  @IsNumber()
  @Type(() => Number)
  Vacation_Days: number;
  @IsString()
  Paid_To_date: string;
  @IsString()
  Last_Name: string;
  @IsString()
  First_Name: string;
  @IsNumber()
  @Type(() => Number)
  SSN: number;
  @IsString()
  Pay_Rate: string;
  @IsString()
  Paid_Last_Year: string;
  @IsString()
  Middle_initial: string;
  @IsString()
  Address1: string;
  @IsString()
  Address2: string;
  @IsString()
  City: string;
  @IsString()
  State: string;
  @IsNumber()
  @Type(() => Number)
  Zip: number;
  @IsString()
  Email: string;
  @IsString()
  Phone_Number: string;
  @IsString()
  Social_Security_Number: string;
  @IsString()
  Drivers_License: string;
  @IsString()
  Marital_Status: string;
  @IsBoolean()
  @Type(() => Boolean)
  Gender: boolean;
  @IsString()
  Shareholder_Status: string;
  @IsString()
  Benefit_Plans: string;
  @IsString()
  Ethnicity: string;
}
