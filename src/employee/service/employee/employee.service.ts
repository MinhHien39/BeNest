import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/typeorm/entities/Employee';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  getEmployee(): Promise<Employee[]> {
    console.log('getEmployee');
    return this.employeeRepository.find();
  }
  create(createEmployee: Employee) {
    return this.employeeRepository.save(createEmployee);
  }
  update(updateEmployee: Employee, idEmployee: number) {
    return this.employeeRepository.update(idEmployee, updateEmployee);
  }
  delete(idEmployee: number) {
    return this.employeeRepository.delete(idEmployee);
  }
  getPayrateById(idEmployee: number) {
    return this.employeeRepository.findOneById(idEmployee);
  }
}
