import { ValidateNested, IsIn, IsNotEmpty, IsUrl, IsArray, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserLoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

}





