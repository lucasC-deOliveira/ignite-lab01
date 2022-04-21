import { PrismaService } from "src/database/prisma/prisma.service";
interface CreateProductsParams {
    title: string;
}
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllProducts(): Promise<import(".prisma/client").Product[]>;
    createProduct({ title }: CreateProductsParams): Promise<import(".prisma/client").Product>;
    getProductsById(id: string): Promise<import(".prisma/client").Product>;
}
export {};
