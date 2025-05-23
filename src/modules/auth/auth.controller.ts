import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService, User } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { phone: string; password: string }
  ): Promise<{ user: User }> {
    const user = await this.authService.validateUser(body.phone, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid phone or password');
    }
    return { user };
  }
}
