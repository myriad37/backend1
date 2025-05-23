"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalsService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../../config/database.config");
let ApprovalsService = class ApprovalsService {
    async getAll() {
        const res = await database_config_1.pool.query('SELECT * FROM event_requests');
        return res.rows;
    }
    async approve(id) {
        await database_config_1.pool.query('UPDATE event_requests SET status = $1 WHERE id = $2', ['approved', id]);
        return { message: 'Request approved' };
    }
    async reject(id) {
        await database_config_1.pool.query('UPDATE event_requests SET status = $1 WHERE id = $2', ['rejected', id]);
        return { message: 'Request rejected' };
    }
};
exports.ApprovalsService = ApprovalsService;
exports.ApprovalsService = ApprovalsService = __decorate([
    (0, common_1.Injectable)()
], ApprovalsService);
//# sourceMappingURL=approvals.service.js.map