import { Injectable } from "@angular/core";
import { Course } from "./models";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment.local";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class CoursesService {
    constructor(private httpClient: HttpClient){}

courses: Course[] = [];

    getCourses$(): Observable<Course[]> {
            return this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`);
    }

    createCourse$(payload: Course): Observable<Course[]> {
        this.courses.push(payload);
        return of ([...this.courses])
    }

    editCourse$(id: number, payload: Course): Observable<Course[]> {
        return of (
            this.courses.map((coursesSearch) => 
            (coursesSearch.id === id ? { ...coursesSearch, ...payload} : coursesSearch))
        );
    }

    deleteCourse$(id: number): Observable<Course[]> {
        this.courses = this.courses.filter((c) => c.id !== id);
        return of (this.courses)
    }

    getCourseById$(id: number): Observable<Course | undefined> {
        return of (this.courses.find((c) => c.id === id));
    }
}