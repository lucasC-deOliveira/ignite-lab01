import { AuthUser } from "src/http/auth/currentUser";
import { CustomersService } from "src/services/customers.service";
import { ProductsService } from "src/services/products.service";
import { PurchaseService } from "src/services/purchases.service";
import { CreatePurchaseinput } from "../inputs/create-purchase-input";
import { Purchase } from "../models/purchases";
export declare class PurchaseResolver {
    private purchaseService;
    private productsService;
    private customersService;
    constructor(purchaseService: PurchaseService, productsService: ProductsService, customersService: CustomersService);
    purchases(): Promise<import(".prisma/client").Purchase[]>;
    product(purchase: Purchase): Promise<import(".prisma/client").Product>;
    createPurchase(data: CreatePurchaseinput, user: AuthUser): Promise<import(".prisma/client").Purchase>;
}
