import { AuthCredentialDto } from 'src/auth/dto/auth-credential.dto';
import { AuthService } from './auth.service';
import {
  Controller,
  Body,
  Post,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { LoginCredentialDto } from 'src/auth/dto/login.dto';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { GetUser } from './get-user-decorator';
import { AuthResDto } from './dto/auth-response.dto';
import { SuccessInterceptor } from 'src/interceptors/success.interceptor';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
@UseInterceptors(SuccessInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 200,
    description: '회원가입 성공',
  })
  @ApiResponse({
    status: 409,
    description: '회원가입 실패(중복된 이에일)',
  })
  @ApiResponse({
    status: 400,
    description: '회원가입 실패(비밀번호 유효성 검사 실패)',
  })
  @ApiOperation({ summary: '회원가입' })
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<AuthResDto> {
    return this.authService.signUp(authCredentialDto);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('/signin')
  signIn(
    @Body(ValidationPipe) loginCredentialDto: LoginCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(loginCredentialDto);
  }

  @Post('/test')
  @UseGuards(new JwtAuthGuard())
  test(@GetUser() userIde) {
    return userIde;
  }
}
