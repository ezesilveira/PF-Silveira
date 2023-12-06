import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { Student, createStudent } from '../models';

export const studentFeatureKey = 'student';

export interface State {
  isLoading: boolean;
  isLoadingStudentToEdit: boolean;
  students: Student[];
  studentToEdit: Student | null;
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingStudentToEdit: false,
  students: [],
  studentToEdit: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(StudentActions.loadStudents, state => ({
    ...state, isLoading: true })),
  on(StudentActions.loadStudentsSuccess, (state, { data }) => ({
    ...state, isLoading: false, students: data })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({ 
    ...state, isLoading: false, error})),

  on(StudentActions.loadStudentToEdit, state => ({ 
    ...state, isLoadingStudentToEdit: true })),
  on(StudentActions.loadStudentToEditSuccess, (state, { data }) => ({ 
    ...state, isLoadingStudentToEdit: false, studentToEdit: data })),
  on(StudentActions.loadStudentToEditFailure, (state, { error }) => ({ 
    ...state, isLoadingStudentToEdit: false, error})),
  on(StudentActions.clearStudentToEdit, (state) => {
      return { ...state, studentToEdit: null };
    }),
  );

export const studentFeature = createFeature({
  name: studentFeatureKey,
  reducer,
});

