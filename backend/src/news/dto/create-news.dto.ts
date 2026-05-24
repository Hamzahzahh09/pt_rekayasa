export class CreateNewsDto {
  title!: string;
  category!: string;
  author!: string;
  coverImage?: string;
  excerpt?: string;
  content!: string;
  tags?: string[];
}