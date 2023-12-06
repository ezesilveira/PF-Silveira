export interface Student {
    id?: number;
    name: string | null;
    lastName: string | null;
    email: string | null;
    token: string| null;
    role: string| null;
    password: string| null;
}

export interface createStudent {
    name: string | null;
    lastName: string | null;
    email: string | null;
    token: string | null;
    role: string | null;
    password: string | null;
}