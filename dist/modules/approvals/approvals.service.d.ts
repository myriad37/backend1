export declare class ApprovalsService {
    getAll(): Promise<any>;
    approve(id: number): Promise<{
        message: string;
    }>;
    reject(id: number): Promise<{
        message: string;
    }>;
}
