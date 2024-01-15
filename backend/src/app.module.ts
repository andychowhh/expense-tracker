import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './login/schemas/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // Ref: https://stackoverflow.com/a/68118948/10686620
    MongooseModule.forRoot('mongodb://andychow:1234@database:27017'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
