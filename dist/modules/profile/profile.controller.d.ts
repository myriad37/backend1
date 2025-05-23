import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileController {
    private readonly service;
    constructor(service: ProfileService);
    getProfile(id: string): Promise<any>;
    updateProfile(id: string, dto: UpdateProfileDto): Promise<any>;
    getUploadedPhotos(id: string): Promise<any>;
    getResponses(id: string): Promise<any>;
    getAllMembers(): Promise<any>;
}
