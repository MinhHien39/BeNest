import { Transform, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import {
  Column,
  Entity,
  EntityRepository,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'personals' })
export class Personals {
  @PrimaryColumn()
  @IsNumber()
  @Type(() => Number)
  Employee_ID: number;
  @Column()
  @IsString()
  First_Name: string;
  @Column()
  @IsString()
  Last_Name: string;
  @Column()
  @IsString()
  Middle_Initial: string;
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
