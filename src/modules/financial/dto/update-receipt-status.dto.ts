import { IsIn, IsString } from 'class-validator';

export class UpdateReceiptStatusDto {
  @IsString()
  @IsIn(['approved', 'rejected'])
  status: 'approved' | 'rejected';
}
