import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personals } from 'src/typeorm/entities/Personal';
import { PersonalController } from './controller/personal/personal.controller';
import { PersonalService } from './service/personal/personal.service';

@Module({
  imports: [TypeOrmModule.forFeature([Personals], 'mssql')],
  controllers: [PersonalController],
  providers: [PersonalService],
  exports: [PersonalService],
})
export class PersonalModule {}
