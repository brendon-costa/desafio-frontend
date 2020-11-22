import {CourseModel} from '../../../../shared/models/courses.model';

export interface HomeState {
  cursos: CourseModel[],
}

export const initialHomeState = {
  cursos: [],
};
