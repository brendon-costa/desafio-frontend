import {Action, createAction, props} from '@ngrx/store';

export enum HomeActionsEnum {
  GetAll = '[ Home ] GetAll',
  GetAllSuccess = '[ Home ] GetAll - SUCCESS',
  GetAllError = '[ Home ] GetAll - ERROR',


}

export const HomeGetAll = createAction(HomeActionsEnum.GetAll);
export const HomeAllSuccess = createAction(HomeActionsEnum.GetAllSuccess);
export const HomeGetAllError = createAction(HomeActionsEnum.GetAllError,
  props<{error: string}>()
);
