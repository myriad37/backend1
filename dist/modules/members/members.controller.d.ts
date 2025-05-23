import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment-status.dto';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    findAll(search?: string): Promise<import("./members.service").Member[]>;
    findById(id: number): Promise<import("./members.service").Member | null>;
    create(dto: CreateMemberDto): Promise<import("./members.service").Member>;
    updateStatus(id: number, dto: UpdatePaymentStatusDto): Promise<void>;
}
