import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @Get('auth/google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {}

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    // Assuming you want to redirect to your frontend home page
    const user = req.user;
    return res.redirect(`http://localhost:3000/home?name=${user.name}`);
  }

  @Get('logout')
  logout(@Req() req, @Res() res) {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send('Error logging out');
      }
      // Redirect back to the login page after logout
      res.redirect('http://localhost:3000');
    });
  }
}
