import { ErrorModel } from '../../../business-layer/models/error.model';

export const REPORT_ERROR = 'REPORT_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export type Actions = {
     REPORT_ERROR : {
             type: typeof REPORT_ERROR,
             payload: ErrorModel
          },
     REMOVE_ERROR: {
             type:  typeof REMOVE_ERROR,
             payload: string
          }
};


export const actionCreators = {
  reportError: ( payload: ErrorModel ): Actions[typeof REPORT_ERROR] => ({
    type: REPORT_ERROR, payload
  }),

  removeError: ( payload: string ): Actions[typeof REMOVE_ERROR] => ({
    type: REMOVE_ERROR, payload,
  })
};
