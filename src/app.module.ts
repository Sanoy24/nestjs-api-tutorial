/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthMododule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthMododule, UserModule, BookmarkModule],
})
export class AppModule {}
