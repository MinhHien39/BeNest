import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payrate } from 'src/typeorm/entities/Payrate';
import { PayrateController } from './controller/payrate/payrate.controller';
import { PayrateService } from './service/payrate/payrate.service';

@Module({
  imports: [TypeOrmModule.forFeature([Payrate])],
  controllers: [PayrateController],
  providers: [PayrateService],
  exports: [PayrateService],
})
export class PayrateModule {}
