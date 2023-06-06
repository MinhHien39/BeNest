import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EmployeeService } from 'src/employee/service/employee/employee.service';
import { Employee } from 'src/typeorm/entities/Employee';
import { Payrate } from 'src/typeorm/entities/Payrate';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  getEmployees(): Promise<Employee[]> {
    return this.employeeService.getEmployee();
  }
  @Post()
  store(@Body() createEmployee: Employee) {
    return this.employeeService.create(createEmployee);
  }

  @Get('/:idEmployee')
  getUser(@Param('idEmployee', ParseIntPipe) idEmployee: number) {
    return this.employeeService.getPayrateById(idEmployee);
  }

  @Patch('/:idEmployee')
  update(
    @Body() updateEmployee: Employee,
    @Param('idEmployee', ParseIntPipe) idEmployee: number,
  ) {
    return this.employeeService.update(updateEmployee, idEmployee);
  }
  @Delete('/:idEmployee')
  deleteUser(@Param('idEmployee', ParseIntPipe) idEmployee: number) {
    return this.employeeService.delete(idEmployee);
  }
}
