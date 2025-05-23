import { FinancialService } from './financial.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptStatusDto } from './dto/update-receipt-status.dto';
export declare class FinancialController {
    private readonly service;
    constructor(service: FinancialService);
    getSummary(): Promise<{
        pending: any;
        overdue: any;
        inBank: any;
    }>;
    getReceiptsByStatus(status: string): Promise<any>;
    uploadReceipt(dto: CreateReceiptDto): Promise<any>;
    updateReceiptStatus(id: string, dto: UpdateReceiptStatusDto): Promise<{
        message: string;
    }>;
}
