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
import { PersonalService } from 'src/personal/service/personal/personal.service';
import { Personals } from 'src/typeorm/entities/Personal';

@Controller('personal')
export class PersonalController {
  constructor(private personalService: PersonalService) {}

  @Get()
  getPersonal(): Promise<Personals[]> {
    return this.personalService.getPersonal();
  }
  @Post()
  store(@Body() createPerson: Personals) {
    return this.personalService.create(createPerson);
  }

  @Get('/:Employee_ID')
  getUser(@Param('Employee_ID', ParseIntPipe) Employee_ID: number) {
    return this.personalService.getPersonById(Employee_ID);
  }

  @Patch('/:Employee_ID')
  update(
    @Body() updatePerson: Personals,
    @Param('Employee_ID', ParseIntPipe) Employee_ID: number,
  ) {
    return this.personalService.update(updatePerson, Employee_ID);
  }
  @Delete('/:Employee_ID')
  deleteUser(@Param('Employee_ID', ParseIntPipe) Employee_ID: number) {
    return this.personalService.delete(Employee_ID);
  }
}
