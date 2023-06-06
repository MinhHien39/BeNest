import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from 'src/employee/service/employee/employee.service';
import { Employee } from 'src/typeorm/entities/Employee';
import { Personals } from 'src/typeorm/entities/Personal';

import { Staff } from 'src/typeorm/entities/Staff';
import { StaffController } from './controller/staff/staff.controller';
import { StaffService } from './service/staff/staff.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Staff, Employee]),
    TypeOrmModule.forFeature([Personals], 'mssql'),
  ],
  controllers: [StaffController],
  providers: [StaffService],
  exports: [StaffService],
})
export class StaffModule {}
