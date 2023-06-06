import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payrate } from 'src/typeorm/entities/Payrate';
import { Repository } from 'typeorm';

@Injectable()
export class PayrateService {
  constructor(
    @InjectRepository(Payrate)
    private payrateRepository: Repository<Payrate>,
  ) {}

  getPayrate(): Promise<Payrate[]> {
    console.log('getUser');
    return this.payrateRepository.find();
  }
  create(createPayrate: Payrate) {
    return this.payrateRepository.save(createPayrate);
  }
  update(updatePayrate: Payrate, idPay_Rates: number) {
    return this.payrateRepository.update(idPay_Rates, updatePayrate);
  }
  delete(idPay_Rates: number) {
    return this.payrateRepository.delete(idPay_Rates);
  }
  getPayrateById(idPay_Rates: number) {
    return this.payrateRepository.findOneById(idPay_Rates);
  }
}
