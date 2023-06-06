import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Employee } from 'src/typeorm/entities/Employee';
// import { Personals } from 'src/typeorm/entities/Personals';

import { Staff } from 'src/typeorm/entities/Staff';
import { Repository } from 'typeorm';
import sql from 'mssql';
import { Personals } from 'src/typeorm/entities/Personal';
import { StaffModule } from 'src/staff/staff.module';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Employee)
    private employeeService: Repository<Employee>,
    @InjectRepository(Personals, 'mssql')
    private personalService: Repository<Personals>,
    @InjectRepository(Staff)
    private staffService: Repository<Staff>,
  ) {}

  getEmployee(): Promise<Employee[]> {
    return this.employeeService.find();
  }
  getPersonals(): Promise<Personals[]> {
    return this.personalService.find();
  }

  async getAllData(): Promise<Staff[]> {
    const employeeList = await this.employeeService.find();
    const personalList = await this.personalService.find();
    console.log(employeeList);
    const staffList: Staff[] = [];
    employeeList.forEach((employee) => {
      const employeeModel = new Staff();
      personalList.forEach((person) => {
        if (employee.idEmployee === person.Employee_ID) {
          employeeModel.idEmployee = employee.idEmployee;
          employeeModel.Employee_Number = employee.Employee_Number;
          employeeModel.First_Name = employee.First_Name;
          employeeModel.Last_Name = employee.Last_Name;
          employeeModel.PayRates_id = employee.PayRates_id;
          employeeModel.Vacation_Days = employee.Vacation_Days;
          employeeModel.Paid_To_date = employee.Paid_To_date;
          employeeModel.SSN = employee.SSN;
          employeeModel.Pay_Rate = employee.Pay_Rate;
          employeeModel.Paid_Last_Year = employee.Paid_Last_Year;
          employeeModel.Address1 = person.Address1;
          employeeModel.Address2 = person.Address2;
          employeeModel.Benefit_Plans = person.Benefit_Plans;
          employeeModel.City = person.City;
          employeeModel.Drivers_License = person.Drivers_License;
          employeeModel.Email = person.Email;
          employeeModel.Ethnicity = person.Ethnicity;
          employeeModel.Marital_Status = person.Marital_Status;
          employeeModel.Middle_initial = person.Middle_Initial;
          employeeModel.Phone_Number = person.Phone_Number;
          employeeModel.State = person.State;
          employeeModel.Zip = person.Zip;
          employeeModel.Gender = person.Gender;
          employeeModel.Social_Security_Number = person.Social_Security_Number;
          employeeModel.Shareholder_Status = person.Shareholder_Status;
          staffList.push(employeeModel);
          this.staffService.save(staffList);
        }
        console.log(staffList);
      });
    });
    const difference1 = employeeList.filter(
      (employee) =>
        !personalList.some(
          (person) => employee.idEmployee === person.Employee_ID,
        ),
    );
    difference1.forEach((employee) => {
      const newStaff = new Staff();
      newStaff.idEmployee = employee.idEmployee;
      newStaff.Employee_Number = employee.Employee_Number;
      newStaff.First_Name = employee.First_Name;
      newStaff.Last_Name = employee.Last_Name;
      newStaff.PayRates_id = employee.PayRates_id;
      newStaff.Vacation_Days = employee.Vacation_Days;
      newStaff.Paid_To_date = employee.Paid_To_date;
      newStaff.SSN = employee.SSN;
      newStaff.Pay_Rate = employee.Pay_Rate;
      newStaff.Paid_Last_Year = employee.Paid_Last_Year;
      newStaff.Address1 = 'null';
      newStaff.Address2 = 'null';
      newStaff.Benefit_Plans = Math.floor(Math.random() * 10);
      newStaff.City = 'null';
      newStaff.Drivers_License = 'null';
      newStaff.Email = 'null';
      newStaff.Ethnicity = 'null';
      newStaff.Marital_Status = 'null';
      newStaff.Middle_initial = 'null';
      newStaff.Phone_Number = 'null';
      newStaff.State = 'null';
      newStaff.Zip = Math.floor(Math.random() * 10);
      newStaff.Gender = 'null';
      newStaff.Social_Security_Number = 'null';
      newStaff.Shareholder_Status = 'null';
      staffList.push(newStaff);
      this.staffService.save(staffList);
    });

    const difference2 = personalList.filter(
      (person) =>
        !employeeList.some(
          (employee) => person.Employee_ID === employee.idEmployee,
        ),
    );
    difference2.forEach((person) => {
      const newStaff = new Staff();
      const number = 1000;
      newStaff.idEmployee = person.Employee_ID;
      newStaff.Employee_Number = number + person.Employee_ID;
      newStaff.First_Name = person.First_Name;
      newStaff.Last_Name = person.Last_Name;
      newStaff.PayRates_id = person.Employee_ID;
      newStaff.Vacation_Days = Math.floor(Math.random() * 10);
      newStaff.Paid_To_date = 'null';
      newStaff.SSN = Math.floor(Math.random() * 1000000000);
      newStaff.Pay_Rate = 'null';
      newStaff.Paid_Last_Year = 'null';
      newStaff.Address1 = person.Address1;
      newStaff.Address2 = person.Address2;
      newStaff.Benefit_Plans = person.Benefit_Plans;
      newStaff.City = person.City;
      newStaff.Drivers_License = person.Drivers_License;
      newStaff.Email = person.Email;
      newStaff.Ethnicity = person.Ethnicity;
      newStaff.Marital_Status = person.Marital_Status;
      newStaff.Middle_initial = person.Middle_Initial;
      newStaff.Phone_Number = person.Phone_Number;
      newStaff.State = person.State;
      newStaff.Zip = person.Zip;
      newStaff.Gender = person.Gender;
      newStaff.Social_Security_Number = person.Social_Security_Number;
      newStaff.Shareholder_Status = person.Shareholder_Status;
      staffList.push(newStaff);
      this.staffService.save(staffList);
    });
    const result = [...difference1, ...difference2];
    console.log(result);
    const promise = Promise.resolve(staffList);
    return promise;
  }
  async create(createStaff: Staff) {
    return this.staffService.save(createStaff);
  }
  update(updateStaff: Staff, staffId: number) {
    return this.staffService.update(staffId, updateStaff);
  }
  delete(staffId: number) {
    return this.staffService.delete(staffId);
  }
  getStaffById(staffId: number) {
    return this.staffService.findOneById(staffId);
  }
}
