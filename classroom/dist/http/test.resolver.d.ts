import { PrismaService } from 'src/database/prisma/prisma.service';
export declare class TestResolver {
    private prisma;
    constructor(prisma: PrismaService);
    hello(): string;
}
