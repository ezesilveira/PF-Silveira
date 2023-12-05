import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from './student.reducer';

export const selectStudentState = createFeatureSelector<fromStudent.State>(
  fromStudent.studentFeatureKey
);

export const selectStudents = createSelector(
  selectStudentState,
  (state) => state.students
);

export const selectStudentsIsLoading = createSelector(
  selectStudentState,
  (state) => state.isLoading
)

export const selectStudentToEdit = createSelector(
  selectStudentState,
  (state) => state.studentToEdit
)
