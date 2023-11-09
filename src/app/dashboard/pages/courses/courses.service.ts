import { Injectable } from "@angular/core";
import { Course } from "./models";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CoursesService {

courses: Course[] = [
    {
        id: 1,
        name: 'Introducción STAR WARS',
        duration: '3 Meses'
    },
    {
        id: 2,
        name: 'El Universo Expandido',
        duration: '2 Meses'
    },
    {
        id: 3,
        name: 'Peliculas y Series',
        duration: '3 Meses',
    }
    ]

    getCourses$(): Observable<Course[]> {
        return of (this.courses)
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