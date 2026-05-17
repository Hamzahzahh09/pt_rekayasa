import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('news')
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 50 })
  category: string;

  @Column({ length: 100 })
  author: string;

  @Column({ type: 'text', nullable: true })
  coverImage: string;

  @Column({ type: 'text', nullable: true })
  excerpt: string;

  @Column({ type: 'longtext' })
  content: string;

  @Column({ type: 'json', nullable: true })
  tags: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
