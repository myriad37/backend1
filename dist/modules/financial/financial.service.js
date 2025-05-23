"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../../config/database.config");
let FinancialService = class FinancialService {
    async getSummary() {
        const [pending, overdue, inBank] = await Promise.all([
            database_config_1.pool.query('SELECT * FROM receipts WHERE status = $1', ['pending']),
            database_config_1.pool.query('SELECT * FROM receipts WHERE status = $1', ['overdue']),
            database_config_1.pool.query('SELECT * FROM bank_summary'),
        ]);
        return {
            pending: pending.rows,
            overdue: overdue.rows,
            inBank: inBank.rows,
        };
    }
    async getReceiptsByStatus(status) {
        const result = await database_config_1.pool.query('SELECT * FROM receipts WHERE status = $1', [status]);
        return result.rows;
    }
    async uploadReceipt(dto) {
        const result = await database_config_1.pool.query(`INSERT INTO receipts (user_id, image_url, status, amount)
       VALUES ($1, $2, 'pending', $3)
       RETURNING *`, [dto.userId, dto.imageUrl, dto.amount]);
        return result.rows[0];
    }
    async updateReceiptStatus(id, status) {
        const result = await database_config_1.pool.query('UPDATE receipts SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
        if (status === 'approved') {
            await database_config_1.pool.query('INSERT INTO bank_summary (month, amount) VALUES (CURRENT_DATE, $1)', [result.rows[0].amount]);
        }
        return { message: `Receipt ${id} marked as ${status}` };
    }
};
exports.FinancialService = FinancialService;
exports.FinancialService = FinancialService = __decorate([
    (0, common_1.Injectable)()
], FinancialService);
//# sourceMappingURL=financial.service.js.map