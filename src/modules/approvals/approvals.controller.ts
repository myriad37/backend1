import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { ApprovalsService } from './approvals.service';
import { UpdateApprovalStatusDto } from './dto/update-approval-status.dto';

@Controller('approvals')
export class ApprovalsController {
  constructor(private readonly service: ApprovalsService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Patch(':id/approve')
  approve(@Param('id') id: string) {
    return this.service.approve(Number(id));
  }

  @Patch(':id/reject')
  reject(@Param('id') id: string) {
    return this.service.reject(Number(id));
  }
}
