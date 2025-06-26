import { Injectable, NestMiddleware } from '@nestjs/common';
//import req,res,next from express
import { Request,Response,NextFunction } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // jo method hai , jo url hai console mai show honi chahiye mujhe
    console.log(`[${req.method}] - [${req.originalUrl}]`);
    // jo kaam karna tha ho gyaa , move the request to next middleware or anything
    next();
  }
}
