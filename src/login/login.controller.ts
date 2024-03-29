import { Controller, Post, Body } from '@nestjs/common';
import { UserLoginDto } from '../users/dto/login.dto';
import { UserModel } from '../users/user.model';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async createUser(@Body() body: UserLoginDto): Promise<UserModel> {
    return await this.loginService.loginUser(body);
  }
}