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
import { CreateStaffDto } from 'src/dto/create-staff.dto';
import { StaffService } from 'src/staff/service/staff/staff.service';
import { Employee } from 'src/typeorm/entities/Employee';
import { Staff } from 'src/typeorm/entities/Staff';

@Controller('staff')
export class StaffController {
  constructor(private staffService: StaffService) {}
  // @Get()
  // getStaff() {
  //   return this.staffService.getStaff();
  // }
  @Get()
  getUsers() {
    return this.staffService.getAllData();
  }
  @Get('/employee')
  getEmployee() {
    return this.staffService.getEmployee();
  }
  @Get('/personal')
  getPersonal() {
    return this.staffService.getPersonals();
  }
  @Post()
  store(@Body() createStaff: Staff) {
    return this.staffService.create(createStaff);
  }

  @Get('/:idEmployee')
  getStaff(@Param('idEmployee', ParseIntPipe) staffId: number) {
    return this.staffService.getStaffById(staffId);
  }

  @Patch('/:idEmployee')
  update(
    @Body() updateStaff: Staff,
    @Param('staffId', ParseIntPipe) staffId: number,
  ) {
    return this.staffService.update(updateStaff, staffId);
  }
  @Delete('/:idEmployee')
  deleteUser(@Param('idEmployee', ParseIntPipe) staffId: number) {
    return this.staffService.delete(staffId);
  }

  // @Post()
  // store(@Body() createStaffDto: CreateStaffDto) {
  //   return this.staffService.create(createStaffDto);
  // }
}
