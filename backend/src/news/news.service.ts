import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class NewsService implements OnModuleInit {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {}

  async onModuleInit() {
    const count = await this.newsRepository.count();
    if (count === 0) {
      await this.seedFromJson();
    }
  }

  private async seedFromJson() {
    const dbPath = path.resolve(__dirname, '../../db.json');
    if (!fs.existsSync(dbPath)) return;

    try {
      const raw = fs.readFileSync(dbPath, 'utf8');
      const data = JSON.parse(raw);
      const items = Array.isArray(data) ? data : data.news || [];

      for (const item of items) {
        const news = this.newsRepository.create({
          title: item.title,
          category: item.category,
          author: item.author,
          coverImage: item.coverImage || null,
          excerpt: item.excerpt || null,
          content: item.content,
          tags: item.tags || [],
          createdAt: item.createdAt ? new Date(item.createdAt) : new Date(),
          updatedAt: item.updatedAt ? new Date(item.updatedAt) : new Date(),
        });
        await this.newsRepository.save(news);
      }
    } catch {
      console.warn('Seed from db.json skipped or failed');
    }
  }

  async findAll(): Promise<News[]> {
    return this.newsRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: number): Promise<News> {
    const news = await this.newsRepository.findOne({ where: { id } });
    if (!news) throw new NotFoundException('News not found');
    return news;
  }

  async create(createNewsDto: any): Promise<News> {
    const news = this.newsRepository.create({
      ...createNewsDto,
      tags: createNewsDto.tags || [],
    });
    return this.newsRepository.save(news);
  }

  async update(id: number, updateNewsDto: any): Promise<News> {
    const news = await this.findOne(id);
    Object.assign(news, updateNewsDto);
    return this.newsRepository.save(news);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.newsRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('News not found');
    return { message: 'News deleted' };
  }
}
