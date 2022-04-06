import { PrismaService } from 'src/database/prisma/prisma.service';
export declare class TestController {
    private prisma;
    constructor(prisma: PrismaService);
    hello(): import(".prisma/client").PrismaPromise<import(".prisma/client").Customer[]>;
}
