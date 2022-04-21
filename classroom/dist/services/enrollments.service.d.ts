import { PrismaService } from "src/database/prisma/prisma.service";
interface GetByCourseAndStudentIdParams {
    courseId: string;
    studentId: string;
}
export declare class EnrollmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllEnrollments(): Promise<import(".prisma/client").Enrollment[]>;
    listEnrollmentsByStudent(studentId: string): Promise<import(".prisma/client").Enrollment[]>;
    getByCourseAndStudentsId({ studentId, courseId }: GetByCourseAndStudentIdParams): Promise<import(".prisma/client").Enrollment>;
}
export {};
