import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enums';
import { ROLES_KEY } from './roles.decorator';
import { stringify } from 'querystring';

@Injectable()
export class RolesGuard implements CanActivate {
  // work of reflector is to set the data that we inserted inside the meta data
  constructor(private reflector : Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY,[
        // jo cheeze hum meta deta set kara rahe the unn meta data ko required roles mai store krr rahe hai 
        context.getHandler(),
        context.getClass()
      ]
    )
    //agar aisa koi route hai jaha roles ki requirement nahi hai toh theek hai 
    if(!requiredRoles)return true;
    
    const request=context.switchToHttp().getRequest<{headers:Record<string,string>}>()
    const userRole=request.headers['x-user-role'] as Role;
    return requiredRoles.includes(userRole);
  }
}
