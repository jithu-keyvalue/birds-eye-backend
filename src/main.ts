import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'your-session-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.enableCors({
    origin: 'http://localhost:3000', // Allow frontend (port 3000) access
    credentials: true,
  });
  await app.listen(3001); // Change the port to 3001
}
bootstrap();
