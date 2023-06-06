import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sequelize } from 'sequelize';
import { Personals } from 'src/typeorm/entities/Personal';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
@EntityRepository(Personals)
export class PersonalService {
  constructor(
    @InjectRepository(Personals, 'mssql')
    private readonly personalRepository: Repository<Personals>, // private readonly sequelize: Sequelize,
  ) {}

  async getPersonal(): Promise<Personals[]> {
    // const sqlServerData = await this.sequelize.query('SELECT * FROM personals');
    return this.personalRepository.find();
  }
  create(createPerson: Personals) {
    return this.personalRepository.save(createPerson);
  }
  update(updatePerson: Personals, Employee_ID: number) {
    return this.personalRepository.update(Employee_ID, updatePerson);
  }
  delete(Employee_ID: number) {
    return this.personalRepository.delete(Employee_ID);
  }
  getPersonById(Employee_ID: number) {
    return this.personalRepository.findOneById(Employee_ID);
  }
}
