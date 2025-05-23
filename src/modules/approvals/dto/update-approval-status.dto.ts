import { IsString } from 'class-validator';

export class UpdateApprovalStatusDto {
  @IsString()
  status: string;
}
