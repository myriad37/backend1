import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    getProfile(id: number): Promise<any>;
    updateProfile(id: number, dto: UpdateProfileDto): Promise<any>;
    getUploadedPhotos(userId: number): Promise<any>;
    getResponses(userId: number): Promise<any>;
    getAllMembers(): Promise<any>;
}
