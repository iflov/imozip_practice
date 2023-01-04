import { PickType } from '@nestjs/swagger';
import { Post } from '../entities/post.entity';

export class PostCredentialDto extends PickType(Post, [
  'title',
  'description',
  'category',
]) {}
