import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibsModule } from 'libs/libs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, LibsModule, LoginModule, MongooseModule.forRoot('mongodb+srv://mondayUser:freeport74123@nestjs.halsh.mongodb.net/uusseerrss?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
