import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '123sodnfsdfkjaop', //protect this, move to env var
    });
  }

  async validate(payload: any) {
    // const user = await this.userService.getById(payload.id)
    console.log('Im here');
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
