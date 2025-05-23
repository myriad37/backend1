"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../../config/database.config");
let ProfileService = class ProfileService {
    async getProfile(id) {
        const res = await database_config_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.rows[0];
    }
    async updateProfile(id, dto) {
        const res = await database_config_1.pool.query(`UPDATE users SET
         full_name = $1,
         date_of_birth = $2,
         address = $3,
         phone = $4,
         password = $5
       WHERE id = $6 RETURNING *`, [dto.fullName, dto.dateOfBirth, dto.address, dto.phone, dto.password, id]);
        return res.rows[0];
    }
    async getUploadedPhotos(userId) {
        const res = await database_config_1.pool.query('SELECT * FROM uploaded_photos WHERE user_id = $1', [userId]);
        return res.rows;
    }
    async getResponses(userId) {
        const res = await database_config_1.pool.query('SELECT * FROM responses WHERE user_id = $1', [userId]);
        return res.rows;
    }
    async getAllMembers() {
        const res = await database_config_1.pool.query('SELECT full_name, phone FROM users WHERE role = $1', ['user']);
        return res.rows;
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)()
], ProfileService);
//# sourceMappingURL=profile.service.js.map