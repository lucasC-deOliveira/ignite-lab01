import { PrismaService } from "src/database/prisma/prisma.service";
interface CreatePurchaseParams {
    customerId: string;
    productId: string;
}
export declare class PurchaseService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllPurchases(): Promise<import(".prisma/client").Purchase[]>;
    listAllPurchasesFromCustomer(customerId: string): Promise<import(".prisma/client").Purchase[]>;
    createPurchase({ customerId, productId }: CreatePurchaseParams): Promise<import(".prisma/client").Purchase>;
}
export {};
