"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../../config/database.config");
let MembersService = class MembersService {
    async findAll() {
        const result = await database_config_1.pool.query('SELECT * FROM members ORDER BY full_name');
        return result.rows.map((row) => ({
            id: row.id,
            fullName: row.full_name,
            phone: row.phone,
            address: row.address,
            photoUrl: row.photo_url,
            paymentStatus: row.payment_status,
            createdAt: row.created_at,
        }));
    }
    async findById(id) {
        const result = await database_config_1.pool.query('SELECT * FROM members WHERE id = $1', [id]);
        if (result.rowCount === 0)
            return null;
        const row = result.rows[0];
        return {
            id: row.id,
            fullName: row.full_name,
            phone: row.phone,
            address: row.address,
            photoUrl: row.photo_url,
            paymentStatus: row.payment_status,
            createdAt: row.created_at,
        };
    }
    async create(member) {
        const result = await database_config_1.pool.query(`INSERT INTO members (full_name, phone, address, photo_url, payment_status)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`, [member.fullName, member.phone, member.address || null, member.photoUrl || null, member.paymentStatus || 'pending']);
        const row = result.rows[0];
        return {
            id: row.id,
            fullName: row.full_name,
            phone: row.phone,
            address: row.address,
            photoUrl: row.photo_url,
            paymentStatus: row.payment_status,
            createdAt: row.created_at,
        };
    }
    async updatePaymentStatus(id, status) {
        await database_config_1.pool.query('UPDATE members SET payment_status = $1 WHERE id = $2', [status, id]);
    }
    async searchByName(search) {
        const result = await database_config_1.pool.query('SELECT * FROM members WHERE full_name ILIKE $1 ORDER BY full_name', [`%${search}%`]);
        return result.rows.map((row) => ({
            id: row.id,
            fullName: row.full_name,
            phone: row.phone,
            address: row.address,
            photoUrl: row.photo_url,
            paymentStatus: row.payment_status,
            createdAt: row.created_at,
        }));
    }
};
exports.MembersService = MembersService;
exports.MembersService = MembersService = __decorate([
    (0, common_1.Injectable)()
], MembersService);
//# sourceMappingURL=members.service.js.map