import {HOME_STATE_NAME, HomeState} from '../home.states';
import {CoursesModel} from '../../../../shared/models/courses.model';
import {createSelector} from '@ngrx/store';


export const selectFeatureHome = (state: any): HomeState => state[HOME_STATE_NAME];
export const selectHomeItems =
  createSelector(selectFeatureHome, (state: HomeState): CoursesModel[] => state.items);

export const selectSuccess =
  createSelector(selectFeatureHome, (state: HomeState): string => state.lastRequestStatus);
