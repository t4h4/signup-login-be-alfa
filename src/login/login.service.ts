import { Injectable } from '@nestjs/common';
import { UserModel } from '../users/user.model';
import { UserLoginDto } from '../users/dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService} from '../users/users.service';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('User') private readonly userMongo: Model<UserModel>,
    private readonly userService: UsersService,
  ) {}

  async loginUser(user: UserLoginDto): Promise<any> {
    try {
      const existUser = await this.userMongo
        .findOne({
          email: user.email,
        })
        .exec();

      if (existUser) {
        let checkPwd;
        await this.userService
          .compareHashes(user.password, existUser.password)
          .then(resp => {
            if (resp) {
              checkPwd = true;
            } else {
              checkPwd = false;
            }
          });

        if (checkPwd) {
          return await { success: true, value: existUser };
        } else {
          return await {
            success: false,
            response: 'user password is incorrect!',
          };
        }
      } else {
        return await { success: false, response: 'user does not exist!' };
      }
    } catch (ex) {
      return await {
        success: false,
        response: 'something went wrong while login process!',
        exception: ex,
      };
    }
  }
}