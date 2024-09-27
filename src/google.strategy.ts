import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '387181299184-c9u9regvo7pporfi6m5vgoj22tb6jnca.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3001/auth/google/callback',
      scope: ['profile', 'email'], // Request profile and email
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    return { name: profile.displayName, email: profile.emails[0].value };
  }
}
