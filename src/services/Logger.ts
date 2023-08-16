
import { injectable } from "../di";


export const ILogger = Symbol.for('@/services/Logger');

@injectable()
export class Logger {
  log(message: string) {
    console.log(message);
  }
  
  error(message: string) {
    console.error(message);
  }
  
  // send log to server
  report(){
    
  }
}
