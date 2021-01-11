import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel} from './user.model';
import { UserCreateDto } from './dto/user.dto'
import { UserUpdateDto } from './dto/user_update.dto'


@Injectable()
export class UsersService {

    constructor(
    @InjectModel('User') private readonly userMongo: Model<UserModel>,

     ) { }

async create(user: UserCreateDto): Promise<UserModel> {
    const createdUser = new this.userMongo(user);
    return await createdUser.save();
}

async findAll(): Promise<UserModel[]> {
    return await this.userMongo.find();
}

async findOne(id: string): Promise<UserModel> {
    return await this.userMongo.findOne({ _id: id }).exec();
}

async update(id:string, userUpdateDto:UserUpdateDto): Promise<UserModel> {
    let newModel = this.userMongo.findOne({ _id: id }).exec();
        newModel = { ...newModel, ...userUpdateDto };
        return await this.userMongo.findByIdAndUpdate(id, newModel, { new: true }).exec();
}
async delete(id: string): Promise<UserModel> {
    return await this.userMongo.findByIdAndRemove({ _id: id });
}

}
