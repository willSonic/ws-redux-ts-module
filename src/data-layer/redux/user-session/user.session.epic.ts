import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import { container } from 'dependency-injection.ts';
import { Observable } from 'rxjs/Observable';
import { ActionsObservable } from 'redux-observable';

import { push } from 'react-router-redux';

import * as errorActions from '../error/error.actions';
import * as userSessionActions from '../user-session/user.session.actions';

import { UserServices } from '../../api/user.service';

const userServices:UserServices = container.getInstanceOf(UserServices);

export class UserSessionEpic {
  //@Effect()  startAppClearUser$  = Observable.of(new usersessionActions.AppStartLoginClear());


        static loginUser$ = ( action$: ActionsObservable<any>) =>
                action$.ofType(userSessionActions.LOGIN_USER_ATTEMPT)
                    .switchMap( ( {payload}) => {
                         return userServices.loginUser( payload,
                            errorActions.REPORT_ERROR,
                            userSessionActions.LOGIN_USER_FAILURE,
                            userSessionActions.LOGIN_USER_SUCCESS);
                    });


        static logoutUser$ = ( action$: ActionsObservable<any>) =>
                action$.ofType(userSessionActions.LOGOUT_USER_ATTEMPT)
                    .switchMap( () => {
                           return  userServices.logoutUser(errorActions.REPORT_ERROR,
                                                          userSessionActions.LOGOUT_USER_FAILURE,
                                                          userSessionActions.LOGOUT_USER_SUCCESS);
                    });


        static logoutUserSuccess$ = ( action$: ActionsObservable<any>) =>
                action$.ofType(userSessionActions.LOGOUT_USER_SUCCESS)
                 .switchMap( () => Observable.of(push('/')));



        static removeErrorModelCheckUserFailure$ = ( action$: ActionsObservable<any>) =>
                action$.ofType(userSessionActions.LOGIN_USER_FAILURE)
                 .switchMap( ( {payload}) =>  Observable.of( errorActions.actionCreators.removeError(payload)));


}
