import {HomeState, initialHomeState} from '../home.states';
import {Action, createReducer, on} from '@ngrx/store';
import {HomeAllSuccess, HomeGetAll, HomeGetAllError} from '../actions/home.actions';


const setErrorState = (state: any, error: string) => {
  return ({...state, error, lastRequestStatus: 'error'});
};

const loading = (state): any => ({...state, lastRequestStatus: 'loading'});
const success = (state): any => ({...state, lastRequestStatus: 'success'});

const _HomeReducer = createReducer(
  initialHomeState,
  on(HomeGetAll, (state) => loading(state.cursos)),
  on(HomeAllSuccess, (state, items ) => ({ ...success(state), items })),
  on(HomeGetAllError, (state, error ) => setErrorState(state, error.error)),
);

export function HomeReducer(state: HomeState | undefined, action: Action) {
  return _HomeReducer(state, action);
}
