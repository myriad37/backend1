import { Controller, Get, Post, Param, Body, Query, Patch } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment-status.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  findAll(@Query('search') search?: string) {
    return search
      ? this.membersService.searchByName(search)
      : this.membersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.membersService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateMemberDto) {
    return this.membersService.create(dto);
  }

  @Patch(':id/payment-status')
  updateStatus(@Param('id') id: number, @Body() dto: UpdatePaymentStatusDto) {
    return this.membersService.updatePaymentStatus(id, dto.paymentStatus);
  }
}
