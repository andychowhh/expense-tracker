import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
// import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Cookies
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Swagger APIs')
    .setDescription('All apis for expense trackers are listed below')
    .setVersion('1.0')
    .addCookieAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(process.env.PORT as string) || 3001);
}
bootstrap();
