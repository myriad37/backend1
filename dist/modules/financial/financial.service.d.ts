import { CreateReceiptDto } from './dto/create-receipt.dto';
export declare class FinancialService {
    getSummary(): Promise<{
        pending: any;
        overdue: any;
        inBank: any;
    }>;
    getReceiptsByStatus(status: string): Promise<any>;
    uploadReceipt(dto: CreateReceiptDto): Promise<any>;
    updateReceiptStatus(id: number, status: 'approved' | 'rejected'): Promise<{
        message: string;
    }>;
}
