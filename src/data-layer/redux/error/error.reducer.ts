import { createSelector } from 'reselect';
import { ErrorModel  } from '../../../business-layer/models/error.model';
import { RootAction } from '../root-action';
import { REMOVE_ERROR,
        REPORT_ERROR } from './error.actions';


export  interface State {
  ids: string[];
  entities: { [id: string]: ErrorModel };
}


export const initialState: State = {
  ids: [],
  entities: {}
};




export function ErrorReducer(state = initialState, action: RootAction): State {

  switch (action.type) {
    case REPORT_ERROR: {
          const error:ErrorModel = <ErrorModel>action.payload;
          return {
            ids: [ ...state.ids, error.id ],
            entities: Object.assign({}, state.entities, { [error.id]: error  })
          };
    }
    case REMOVE_ERROR: {
          const errorId:string = <string>action.payload;

          if (state.ids.indexOf(errorId) > -1) {
             return state;
          }

          const errorIdsPostRemoval =  state.ids.filter(id => id !== errorId);

          let errorEntities =  Object.assign({}, state.entities);
          delete errorEntities[errorId];

          return  Object.assign({}, state,{
             ids: errorIdsPostRemoval,
             entities: errorEntities
          });
    }

    default: {
      return state;
    }
  }

}




export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});



