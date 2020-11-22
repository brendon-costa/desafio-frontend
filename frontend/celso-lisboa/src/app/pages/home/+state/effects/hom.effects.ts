import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CourseResourceService} from '../../../../shared/services/course.resource.service';
import {Observable, of} from 'rxjs';
import {HomeAllSuccess, HomeGetAll, HomeGetAllError} from '../actions/home.actions';
import {catchError, concatMap, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private resource: CourseResourceService,
  ) { }


  /* GET */
  getAll$ = createEffect( () => <Observable<any>> this.actions$.pipe(
    ofType(HomeGetAll),
    switchMap((data) => this.resource.getAllCourses().pipe(
      concatMap( (items) => of(HomeAllSuccess())),
      catchError( error => of(HomeGetAllError(error)))
    ))
  ));

}
