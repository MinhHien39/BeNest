import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class CrateUserDto {
  @IsString()
  Email: string;
  @IsNumber()
  @Type(() => Number)
  Active: number;
  @IsNumber()
  @Type(() => Number)
  Password: number;
  @IsString()
  User_Name: string;
}
