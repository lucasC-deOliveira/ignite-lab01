import { AuthUser } from "src/http/auth/currentUser";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { Student } from "../models/student";
export declare class StudentsResolver {
    private studentsService;
    private enrolmentsService;
    constructor(studentsService: StudentsService, enrolmentsService: EnrollmentsService);
    me(user: AuthUser): Promise<import(".prisma/client").Student>;
    students(): Promise<import(".prisma/client").Student[]>;
    enrollments(student: Student): Promise<import(".prisma/client").Enrollment[]>;
}
