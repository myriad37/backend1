import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
export declare class AnnouncementController {
    private readonly service;
    constructor(service: AnnouncementService);
    create(dto: CreateAnnouncementDto): Promise<any>;
    findAll(): Promise<any>;
    update(id: string, dto: CreateAnnouncementDto): Promise<any>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
