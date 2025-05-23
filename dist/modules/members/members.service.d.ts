export interface Member {
    id: number;
    fullName: string;
    phone: string;
    address?: string | null;
    photoUrl?: string | null;
    paymentStatus: 'paid' | 'pending' | 'overdue';
    createdAt: Date;
}
export declare class MembersService {
    findAll(): Promise<Member[]>;
    findById(id: number): Promise<Member | null>;
    create(member: Omit<Member, 'id' | 'createdAt'>): Promise<Member>;
    updatePaymentStatus(id: number, status: 'paid' | 'pending' | 'overdue'): Promise<void>;
    searchByName(search: string): Promise<Member[]>;
}
