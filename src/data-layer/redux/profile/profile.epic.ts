import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { container } from 'dependency-injection.ts';

import * as errorActions from '../error/error.actions';
import * as profileActions from '../profile/profile.actions';

import { ActionsObservable } from 'redux-observable';

import * as fromRoot from '../root-reducer';

import { UserServices } from '../../api/user.service';

const userServices:UserServices = container.getInstanceOf(UserServices);

export class ProfileEpic {

        static registerUser$ = ( action$: ActionsObservable<any>) =>
                action$.ofType(profileActions.REGISTER_USER_ATTEMPT)
                .switchMap(({ payload }) => { return userServices.registerUser( payload,
                                                        errorActions.REPORT_ERROR,
                                                        profileActions.REGISTER_USER_FAILURE,
                                                        profileActions.REGISTER_USER_SUCCESS)
                                                        });





        static getUserByName$ =( action$: ActionsObservable<any>) =>
                action$.ofType(profileActions.CHECK_USER_PROFILE_NAME_ATTEMPT)
                .switchMap(({ payload }) => { return userServices.getUserByName( payload,
                                                        errorActions.REPORT_ERROR,
                                                        profileActions.CHECK_USER_PROFILE_NAME_FAILURE,
                                                        profileActions.CHECK_USER_PROFILE_NAME_SUCCESS)
                                                        });

        static getUserProfile$ = ( action$: ActionsObservable<any>) =>
                action$.ofType(profileActions.GET_USER_PROFILE_ATTEMPT)
               .withLatestFrom([fromRoot.getProfileEntities])
               .map( ([ {payload} , profileEntities ]) => [payload, {profileEntities} ] )
               .switchMap(([username, profileEntities]) => {
                const existsInStore = Object.keys(profileEntities).filter(
                                           entity=> {
                                                        if(profileEntities[entity].username === username) {
                                                          return profileEntities[entity];
                                                        }
                                                    });
                        let obs;
                        if(existsInStore && existsInStore.length>0 ) {
                          obs =  Observable.of( profileActions.actionCreators.setProfileSelectedId(existsInStore[0]));
                        }else {
                          obs = userServices.getUserByName( username,
                                                                 errorActions.REPORT_ERROR,
                                                                 profileActions.CHECK_USER_PROFILE_NAME_FAILURE,
                                                                 profileActions.GET_USER_PROFILE_SUCCESS );
                        }
                        return obs;
                      });
}
