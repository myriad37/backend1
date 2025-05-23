import { AuthService, User } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        phone: string;
        password: string;
    }): Promise<{
        user: User;
    }>;
}
