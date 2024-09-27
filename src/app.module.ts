import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RequestModule } from './request/request.module';
import { SummaryModule } from './summary/summary.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'birds_eye',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    UserModule,
    RequestModule,
    SummaryModule,
    NoteModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
