import { Observable } from 'rxjs/Observable';
import { ActionsObservable } from 'redux-observable';

import { push } from 'react-router-redux';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { ErrorModel } from '../../../business-layer/models/error.model';

import * as errorActions from './error.actions';
import * as profileActions from '../profile/profile.actions';
import * as userSessionActions from '../user-session/user.session.actions';



export class ErrorEpic {


        static catchAllRemoteErrors = ( action$: ActionsObservable<any>) =>
                action$.ofType(errorActions.REPORT_ERROR)
                    .switchMap(({ payload }) => {
                        console.log('ErrorEpic ----- payload =', payload)
                        let obs;
                        switch(payload.action_type) {

                             case profileActions.CHECK_USER_PROFILE_NAME_FAILURE:
                              if(window.location.href.indexOf('register')>0) {
                                obs = Observable.of( profileActions.actionCreators.checkUserProfileNameFailure(<ErrorModel> payload));
                              }else {
                                obs = Observable.of(push('/error'));
                              }
                             break;

                             case userSessionActions.LOGIN_USER_FAILURE:
                               obs = Observable.of(userSessionActions.actionCreators.userLoginFailure(<ErrorModel> payload));
                             break;

                             default:{
                                obs = Observable.of( push('/error'));
                             }
                        }
                        return obs;
                   });

}