import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EmployeeModule } from './employee/employee.module';

import { StaffModule } from './staff/staff.module';
import { Employee } from './typeorm/entities/Employee';
import { Staff } from './typeorm/entities/Staff';

import { PersonalModule } from './personal/personal.module';
import { Personals } from './typeorm/entities/Personal';

import { UserModule } from './user/user.module';
import { User } from './typeorm/entities/User';
import { PayrateModule } from './payrate/payrate.module';
import { Payrate } from './typeorm/entities/Payrate';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Hien456789',
      database: 'payroll',
      entities: [Staff, Employee, User, Payrate],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forRoot({
      name: 'mssql',
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'Hien456789',
      database: 'HR',
      entities: [Personals],
      synchronize: true,
      autoLoadEntities: true,
      options: {
        trustServerCertificate: true,
      },
    }),
    // type: 'mssql',
    //     host: 'localhost',
    //     port: 1433,
    //     username: 'sa',
    //     password: 'Hien456789',
    //     database: 'HR',
    //     entities: [Personals],
    //     synchronize: true,
    //     autoLoadEntities: true,
    //     options: {
    //       trustServerCertificate: true,
    //     },
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'Hien456789',
    //   database: 'payroll',
    //   entities: [Staff, Employee],
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    EmployeeModule,
    UserModule,
    StaffModule,
    PayrateModule,
    PersonalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
