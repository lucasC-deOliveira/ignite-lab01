import { PrismaService } from "src/database/prisma/prisma.service";
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllStudents(): Promise<import(".prisma/client").Student[]>;
    getStudentById(id: string): import(".prisma/client").Prisma.Prisma__StudentClient<import(".prisma/client").Student>;
    getStudentsByAuthUserId(authUserId: string): Promise<import(".prisma/client").Student>;
}
