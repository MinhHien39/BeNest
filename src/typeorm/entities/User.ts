import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @Type(() => Number)
  User_ID: number;
  @Column()
  @IsString()
  Email: string;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Active: number;
  @Column()
  @IsNumber()
  @Type(() => Number)
  Password: number;
  @Column()
  @IsString()
  User_Name: string;
}
