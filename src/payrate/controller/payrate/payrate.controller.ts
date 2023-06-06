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
import { PayrateService } from 'src/payrate/service/payrate/payrate.service';
import { Payrate } from 'src/typeorm/entities/Payrate';

@Controller('payrate')
export class PayrateController {
  constructor(private payrateService: PayrateService) {}

  @Get()
  getPayrate(): Promise<Payrate[]> {
    return this.payrateService.getPayrate();
  }
  @Post()
  store(@Body() createPayrate: Payrate) {
    return this.payrateService.create(createPayrate);
  }

  @Get('/:idPay_Rates')
  getUser(@Param('idPay_Rates', ParseIntPipe) idPay_Rates: number) {
    return this.payrateService.getPayrateById(idPay_Rates);
  }

  @Patch('/:idPay_Rates')
  update(
    @Body() updatePayrate: Payrate,
    @Param('idPay_Rates', ParseIntPipe) idPay_Rates: number,
  ) {
    return this.payrateService.update(updatePayrate, idPay_Rates);
  }
  @Delete('/:idPay_Rates')
  deleteUser(@Param('idPay_Rates', ParseIntPipe) idPay_Rates: number) {
    return this.payrateService.delete(idPay_Rates);
  }
}
