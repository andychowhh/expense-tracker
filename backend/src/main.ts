import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['content-type'],
  });

  const config = new DocumentBuilder()
    .setTitle('Swagger APIs')
    .setDescription('All apis for expense trackers are listed below')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
