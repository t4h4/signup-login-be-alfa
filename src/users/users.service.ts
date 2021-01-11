import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './user.model';
import { UserCreateDto } from './dto/user.dto'
import { UserUpdateDto } from './dto/user_update.dto'
import { ResourceService } from 'libs/services/resource.service';


@Injectable()
export class UsersService extends ResourceService<UserModel, UserCreateDto, UserUpdateDto> {

    constructor(
        @InjectModel('User') userMongo: Model<UserModel>,

    ) {
        super(userMongo)
    }


}
