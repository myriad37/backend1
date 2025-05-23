import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  @Get(':id')
  getProfile(@Param('id') id: string) {
    return this.service.getProfile(Number(id));
  }

  @Patch(':id')
  updateProfile(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
    return this.service.updateProfile(Number(id), dto);
  }

  @Get(':id/photos')
  getUploadedPhotos(@Param('id') id: string) {
    return this.service.getUploadedPhotos(Number(id));
  }

  @Get(':id/responses')
  getResponses(@Param('id') id: string) {
    return this.service.getResponses(Number(id));
  }

  @Get('members')
  getAllMembers() {
    return this.service.getAllMembers();
  }
}
