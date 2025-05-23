import { ApprovalsService } from './approvals.service';
export declare class ApprovalsController {
    private readonly service;
    constructor(service: ApprovalsService);
    getAll(): Promise<any>;
    approve(id: string): Promise<{
        message: string;
    }>;
    reject(id: string): Promise<{
        message: string;
    }>;
}
