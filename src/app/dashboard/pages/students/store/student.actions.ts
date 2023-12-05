import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student, createStudent } from '../models';

export const StudentActions = createActionGroup({
  source: 'Student',
  events: {
    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: Student[] }>(),
    'Load Students Failure': props<{ error: unknown }>(),
    'Load Student To Edit': props<{ studentId: number }>(),
    'Load Student To Edit Success': props<{ data: createStudent }>(),
    'Load Student To Edit Failure': props<{ error: unknown }>(),
    'Create Student': props<{ payload: createStudent }>(),
    'Create Student Failure': props<{ error: unknown }>(),
    'Delete Student': props<{ studentId: number }>(),
    'Delete Student Success': props<{ studentId: number }>(),
    'Delete Student Failure': props<{ error: unknown }>(),
  }
});
