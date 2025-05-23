"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../../config/database.config");
let AnnouncementService = class AnnouncementService {
    async create(dto) {
        const res = await database_config_1.pool.query('INSERT INTO announcements (title, date, location, description, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *', [dto.title, dto.date, dto.location, dto.description, dto.imageUrl]);
        return res.rows[0];
    }
    async findAll() {
        const res = await database_config_1.pool.query('SELECT * FROM announcements ORDER BY date DESC');
        return res.rows;
    }
    async update(id, dto) {
        const res = await database_config_1.pool.query('UPDATE announcements SET title = $1, date = $2, location = $3, description = $4, image_url = $5 WHERE id = $6 RETURNING *', [dto.title, dto.date, dto.location, dto.description, dto.imageUrl, id]);
        return res.rows[0];
    }
    async delete(id) {
        await database_config_1.pool.query('DELETE FROM announcements WHERE id = $1', [id]);
        return { message: 'Deleted successfully' };
    }
};
exports.AnnouncementService = AnnouncementService;
exports.AnnouncementService = AnnouncementService = __decorate([
    (0, common_1.Injectable)()
], AnnouncementService);
//# sourceMappingURL=announcement.service.js.map