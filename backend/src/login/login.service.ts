import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

@Injectable()
export class LoginService {
  async login(token: any) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      console.log(ticket.getPayload());
    } catch (e) {
      console.log(e);
    }

    // log the ticket payload in the console to see what we have

    console.log({ token });
    return 'Loginnnned';
  }
}
