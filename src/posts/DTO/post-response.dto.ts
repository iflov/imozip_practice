import { PickType } from '@nestjs/swagger';
import { Post } from '../entities/post.entity';
export class PostResDto extends PickType(Post, [
  'id',
  'title',
  'user',
  'category',
  'createdAt',
  // 'views',
]) {}
