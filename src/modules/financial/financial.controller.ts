import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { FinancialService } from './financial.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptStatusDto } from './dto/update-receipt-status.dto';

@Controller('financial')
export class FinancialController {
  constructor(private readonly service: FinancialService) {}

  @Get('summary')
  getSummary() {
    return this.service.getSummary();
  }

  @Get('receipts/:status')
  getReceiptsByStatus(@Param('status') status: string) {
    return this.service.getReceiptsByStatus(status);
  }

  @Post('receipts')
  uploadReceipt(@Body() dto: CreateReceiptDto) {
    return this.service.uploadReceipt(dto);
  }

  @Patch('receipts/:id/status')
  updateReceiptStatus(@Param('id') id: string, @Body() dto: UpdateReceiptStatusDto) {
    return this.service.updateReceiptStatus(Number(id), dto.status);
  }
}
