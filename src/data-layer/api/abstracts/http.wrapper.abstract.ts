
import { HttpParams } from '../interfaces/httpParams.model';
import { Observable } from 'rxjs';

export abstract class HttpWrapperAbstract {

  abstract delete(params: HttpParams): Observable<any>
  abstract get(params: HttpParams): Observable<any>
  abstract post(params: HttpParams): Observable<any>
  abstract put(params: HttpParams): Observable<any>

}