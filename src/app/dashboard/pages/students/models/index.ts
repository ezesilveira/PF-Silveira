export interface Student {
    id: number;
    name: string;
    lastName: string;
    email: string;
    token: string;
    role: 'STUDENT';
    password: string;
}