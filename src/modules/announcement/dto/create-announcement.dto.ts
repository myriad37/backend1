import { IsString } from 'class-validator';

export class CreateAnnouncementDto {
  @IsString()
  title: string;

  @IsString()
  date: string;

  @IsString()
  location: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}
