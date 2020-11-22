import {CoursesModel} from '../../../shared/models/courses.model';

export const HOME_STATE_NAME = 'home';

export interface HomeState {
  items: CoursesModel[];
  lastRequestStatus: 'loading' | 'success' | 'error' | null;
  error: string;
}

export const initialHomeState = {
  cursos: [],
};
