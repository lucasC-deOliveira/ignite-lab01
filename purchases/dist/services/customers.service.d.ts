import { PrismaService } from "src/database/prisma/prisma.service";
interface CreateCustomerParams {
    authUserId: string;
}
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    getCustomerByAuthUserId(authUserId: string): Promise<import(".prisma/client").Customer>;
    createCustomer({ authUserId }: CreateCustomerParams): Promise<import(".prisma/client").Customer>;
}
export {};
