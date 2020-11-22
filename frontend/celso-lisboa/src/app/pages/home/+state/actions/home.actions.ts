import {Action, createAction, props} from '@ngrx/store';

export enum HomeActionsEnum {
  GetAll = '[ Home ] GetAll',
  GetAllSuccess = '[ Home ] GetAll - SUCCESS',
  GetAllError = '[ Home ] GetAll - ERROR',


}

export const HomeGetAll = createAction(HomeActionsEnum.GetAll,
  props<any>());
export const HomeAllSuccess = createAction(HomeActionsEnum.GetAllSuccess,
  props<any>());
export const HomeGetAllError = createAction(HomeActionsEnum.GetAllError,
  props<any>());
