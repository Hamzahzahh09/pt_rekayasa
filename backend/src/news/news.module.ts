import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { AuthModule } from '../auth/auth.module';
import { News } from './entities/news.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News]), AuthModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
