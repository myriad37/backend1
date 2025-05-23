import { IsString, IsNumber } from 'class-validator';

export class CreateApprovalDto {
  @IsString()
  name: string;

  @IsString()
  eventType: string;

  @IsNumber()
  amount: number;
}
