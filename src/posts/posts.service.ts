import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from './posts.repository';
import { PostCredentialDto } from './DTO/post-request.dto';
import { PostResDto } from './DTO/post-response.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
  ) {}

  async setPost(body: PostCredentialDto): Promise<PostResDto> {
    const { title, description, category } = body;

    const result = await this.postRepository.save({
      title,
      description,
      category,
    });

    return result;
  }
}
