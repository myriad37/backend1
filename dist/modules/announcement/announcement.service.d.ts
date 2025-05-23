import { CreateAnnouncementDto } from './dto/create-announcement.dto';
export declare class AnnouncementService {
    create(dto: CreateAnnouncementDto): Promise<any>;
    findAll(): Promise<any>;
    update(id: number, dto: CreateAnnouncementDto): Promise<any>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
