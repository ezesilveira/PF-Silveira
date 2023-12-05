export interface Student {
    id: number;
    name: string;
    lastName: string;
    email: string;
    token: string;
    role: 'STUDENT';
    password: string;
}

export interface createStudent {
    name: string | null;
    lastName: string | null;
    email: string | null;
    token: string | null;
    role: string | null;
    password: string | null;
}