"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const database_config_1 = require("../../config/database.config");
let AuthService = class AuthService {
    async validateUser(phone, password) {
        const result = await database_config_1.pool.query('SELECT id, full_name, phone, role, password FROM users WHERE phone = ', [phone]);
        if (result.rowCount === 0)
            return null;
        const user = result.rows[0];
        if (user.password !== password) {
            return null;
        }
        return {
            id: user.id,
            fullName: user.full_name,
            phone: user.phone,
            role: user.role,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map