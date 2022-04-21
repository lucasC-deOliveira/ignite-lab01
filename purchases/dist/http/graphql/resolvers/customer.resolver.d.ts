import { AuthUser } from 'src/http/auth/currentUser';
import { CustomersService } from 'src/services/customers.service';
import { PurchaseService } from 'src/services/purchases.service';
import { Customer } from '../models/customers';
export declare class CustomersResolver {
    private customersService;
    private purchasesService;
    constructor(customersService: CustomersService, purchasesService: PurchaseService);
    me(user: AuthUser): Promise<import(".prisma/client").Customer>;
    purchases(customer: Customer): Promise<import(".prisma/client").Purchase[]>;
}
