export interface User {
    id: number;
    fullName: string;
    phone: string;
    role: 'admin' | 'user';
}
export declare class AuthService {
    validateUser(phone: string, password: string): Promise<User | null>;
}
