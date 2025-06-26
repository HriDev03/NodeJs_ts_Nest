import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// iss class ko integrate krr paaye in someother class using dependency ingection 

@Injectable()
export class AuthGuard implements CanActivate {
  // Main method of our guard , yaha pe authentication ka code likhe ge
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    //jo user ne request ki hai usse fetch karo
    const request=context.switchToHttp().getRequest();
    
    // jo user ne request ki hai uske header pe jaao aur check ki authorization ke andar kyaa value milli hai and store it in authHeader
    const authHeader=request.headers['authorization'];
    
    return authHeader==='Bearer my-secret-token';
    // agar request ki body ke andar authorization header hai and uss token ki value match karti hai then allow it 

  }
}
//yeh guard bola ga ki Yes this is an authentic user allow it to use the protected routes

