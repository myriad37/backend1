"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialController = void 0;
const common_1 = require("@nestjs/common");
const financial_service_1 = require("./financial.service");
const create_receipt_dto_1 = require("./dto/create-receipt.dto");
const update_receipt_status_dto_1 = require("./dto/update-receipt-status.dto");
let FinancialController = class FinancialController {
    constructor(service) {
        this.service = service;
    }
    getSummary() {
        return this.service.getSummary();
    }
    getReceiptsByStatus(status) {
        return this.service.getReceiptsByStatus(status);
    }
    uploadReceipt(dto) {
        return this.service.uploadReceipt(dto);
    }
    updateReceiptStatus(id, dto) {
        return this.service.updateReceiptStatus(Number(id), dto.status);
    }
};
exports.FinancialController = FinancialController;
__decorate([
    (0, common_1.Get)('summary'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FinancialController.prototype, "getSummary", null);
__decorate([
    (0, common_1.Get)('receipts/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinancialController.prototype, "getReceiptsByStatus", null);
__decorate([
    (0, common_1.Post)('receipts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_receipt_dto_1.CreateReceiptDto]),
    __metadata("design:returntype", void 0)
], FinancialController.prototype, "uploadReceipt", null);
__decorate([
    (0, common_1.Patch)('receipts/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_receipt_status_dto_1.UpdateReceiptStatusDto]),
    __metadata("design:returntype", void 0)
], FinancialController.prototype, "updateReceiptStatus", null);
exports.FinancialController = FinancialController = __decorate([
    (0, common_1.Controller)('financial'),
    __metadata("design:paramtypes", [financial_service_1.FinancialService])
], FinancialController);
//# sourceMappingURL=financial.controller.js.map