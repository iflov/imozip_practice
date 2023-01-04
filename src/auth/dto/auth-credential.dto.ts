import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class AuthCredentialDto {
  @ApiProperty({
    example: 'example1@naver.com',
    description: 'email',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password1!',
    description: 'password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
    message: 'Invalid password',
  })
  password: string;

  @ApiProperty({
    example: 'username1',
    description: 'username',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'example nickname1',
    description: 'nickname',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  nickname: string;
}
