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
exports.PurchaseResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const authorization_guard_1 = require("../../auth/authorization.guard");
const currentUser_1 = require("../../auth/currentUser");
const customers_service_1 = require("../../../services/customers.service");
const products_service_1 = require("../../../services/products.service");
const purchases_service_1 = require("../../../services/purchases.service");
const create_purchase_input_1 = require("../inputs/create-purchase-input");
const purchases_1 = require("../models/purchases");
let PurchaseResolver = class PurchaseResolver {
    constructor(purchaseService, productsService, customersService) {
        this.purchaseService = purchaseService;
        this.productsService = productsService;
        this.customersService = customersService;
    }
    async purchases() {
        return await this.purchaseService.listAllPurchases();
    }
    async product(purchase) {
        return await this.productsService.getProductsById(purchase.productId);
    }
    async createPurchase(data, user) {
        console.log(user.sub);
        let customer = await this.customersService.getCustomerByAuthUserId(user.sub);
        if (!customer) {
            customer = await this.customersService.createCustomer({
                authUserId: user.sub
            });
        }
        return this.purchaseService.createPurchase({
            customerId: customer.id,
            productId: data.productId
        });
    }
};
__decorate([
    (0, graphql_1.Query)(() => [purchases_1.Purchase]),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchaseResolver.prototype, "purchases", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchases_1.Purchase]),
    __metadata("design:returntype", Promise)
], PurchaseResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.Mutation)(() => purchases_1.Purchase),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, currentUser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_input_1.CreatePurchaseinput, Object]),
    __metadata("design:returntype", Promise)
], PurchaseResolver.prototype, "createPurchase", null);
PurchaseResolver = __decorate([
    (0, graphql_1.Resolver)(() => purchases_1.Purchase),
    __metadata("design:paramtypes", [purchases_service_1.PurchaseService,
        products_service_1.ProductsService,
        customers_service_1.CustomersService])
], PurchaseResolver);
exports.PurchaseResolver = PurchaseResolver;
//# sourceMappingURL=puschases.resolver.js.map