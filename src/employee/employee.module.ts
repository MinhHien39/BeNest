import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffModule } from 'src/staff/staff.module';
import { Employee } from 'src/typeorm/entities/Employee';
import { EmployeeController } from './controller/employee/employee.controller';
import { EmployeeService } from './service/employee/employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
