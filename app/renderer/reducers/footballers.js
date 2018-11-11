import { handleActions } from 'redux-actions';
import actions from '../actions/footballers';

export default handleActions(
  {
    [actions.loadData]: (state, action) => {
      console.log(action);
      return { ...state, ...action.payload };
    },
  },
  {},
);
