import { IsString, IsOptional } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  fullName: string;

  @IsString()
  dateOfBirth: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;
}
