import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ExpensesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log('request', request.headers);
    const isAdmin = request.headers['is-admin'];
    if (isAdmin && isAdmin === 'true') {
      return true;
    }
    throw new ForbiddenException('You are not allowed to access this route');
  }
}
