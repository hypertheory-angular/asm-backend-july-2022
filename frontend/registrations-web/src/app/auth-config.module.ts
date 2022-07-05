import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority:
          'http://localhost:8080/realms/hypertheory/.well-known/openid-configuration',

        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'frontend',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        secureRoutes: [environment.bffApiUrl],
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
