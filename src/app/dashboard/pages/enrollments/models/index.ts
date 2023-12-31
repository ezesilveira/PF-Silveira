import { Course } from "../../courses/models";
import { User } from "../../users/models";

export interface Enrollment {
    id: number;
    courseId: number;
    studentId: number;
    user?: User;
    course?: Course;
}

export interface CreateEnrollmentPayload {
    courseId: number | null;
    studentId: number | null;
}