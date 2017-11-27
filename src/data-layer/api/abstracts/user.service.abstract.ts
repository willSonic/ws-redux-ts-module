
import { AuthModel } from '../../../business-layer/models';
import { Observable } from 'rxjs';

export abstract class UserServicesAbstract {


    abstract  getUserById( payload:string,
                ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) : Observable<any>;

    abstract getUserByName(payload:string,
                  ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) : Observable<any>;

    abstract loginUser(payload:AuthModel,
              ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) : Observable<any>;

    abstract logoutUser( ErrorActionType:string, SpecificErrorType:string, SuccessType:string ): Observable<any>;

    abstract registerUser(payload: { username: string, password: string, firstname:string, lastname:string, email:string },
                           ErrorActionType:string, SpecificErrorType:string, SuccessType:string ) : Observable<any>;
}
