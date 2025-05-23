import { IsNumber, IsString } from 'class-validator';

export class CreateReceiptDto {
  @IsNumber()
  userId: number;

  @IsString()
  imageUrl: string;

  @IsNumber()
  amount: number;
}
