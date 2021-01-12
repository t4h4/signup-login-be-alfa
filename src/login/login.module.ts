import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../users/user.model';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [LoginController],
  providers: [LoginService, UsersService],
})
export class LoginModule {}