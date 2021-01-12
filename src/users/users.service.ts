import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './user.model';
import { UserCreateDto } from './dto/user.dto'
import { UserUpdateDto } from './dto/user_update.dto'
import { ResourceService } from 'libs/services/resource.service';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashtext = 'aspava';

@Injectable()
export class UsersService extends ResourceService<UserModel, UserCreateDto, UserUpdateDto> {

    constructor(@InjectModel('User') userMongo: Model<UserModel>,) {
        super(userMongo);
    }
    async convertToHash(value: string) {
        let hashPwd;
        await bcrypt.hash(`${hashtext}${value}`, saltRounds).then(hash => {
          hashPwd = hash;
        });
        return await hashPwd;
      }
    
      async compareHashes(password, hashed) {
        const match = await bcrypt.compareSync(`${hashtext}${password}`, hashed);
        return await match;
      }
}
