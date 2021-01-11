import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { UserModel } from './user.model';
import { UsersService } from './users.service'
import { UserCreateDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/user_update.dto'
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async createUser(@Body() body: UserCreateDto): Promise<UserModel> {
        return await this.userService.create(body);
    }

    @Get()
    async getAllUsers(): Promise<UserModel[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async getUser(@Param() params): Promise<UserModel> {
        return await this.userService.findOne(params.id);
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() userUpdateDto: UserUpdateDto
    ): Promise<UserModel> {
        return await this.userService.update(id, userUpdateDto);
    }
    @Delete(':id')
    async removeUser(@Param('id') id: string): Promise<UserModel> {
        return await this.userService.delete(id);
    }



}
