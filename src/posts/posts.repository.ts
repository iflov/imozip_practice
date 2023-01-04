import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostRepository extends Repository<Post> {
  constructor(private datasource: DataSource) {
    super(Post, datasource.createEntityManager());
  }
}
