import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

export class ReturnUser {
  id: number;
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    //TODO: return JWT acess Token
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): ReturnUser {
    //TODO: required an Bearer token
    return req.user;
  }
}
