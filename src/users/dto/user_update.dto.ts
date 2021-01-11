import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsIn, IsNotEmpty, IsOptional, IsString, IsUrl, ValidateNested } from "class-validator";

export class UserUpdateDto{
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    username: string;
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    password: string;
}

