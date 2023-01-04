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
    const { title, category, description } = body;

    const result = await this.postRepository.save({
      title,
      category,
      description,
    });

    return result;
  }
}
