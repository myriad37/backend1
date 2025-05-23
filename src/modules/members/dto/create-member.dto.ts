import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  fullName!: string;

  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsNotEmpty()
  @IsEnum(['paid', 'pending', 'overdue'])
  paymentStatus!: 'paid' | 'pending' | 'overdue' ;
}

