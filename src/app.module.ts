import { Module } from '@nestjs/common';
import { MembersModule } from './modules/members/members.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, MembersModule],
})
export class AppModule {}
