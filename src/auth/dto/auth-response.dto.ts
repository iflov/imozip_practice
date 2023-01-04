import { PickType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class AuthResDto extends PickType(User, [
  'nickname',
  'username',
  'email',
]) {}
