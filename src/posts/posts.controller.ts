import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostCredentialDto } from './DTO/post-request.dto';
import { PostResDto } from './DTO/post-response.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create')
  async setPost(@Body() body: PostCredentialDto): Promise<PostResDto> {
    return this.postsService.setPost(body);
  }

  @Get()
  getPost() {
    return 'getPost';
  }

  @Put()
  updatePost() {
    return 'updatePost';
  }

  @Delete()
  deletePost() {
    return 'deletePost';
  }
}
