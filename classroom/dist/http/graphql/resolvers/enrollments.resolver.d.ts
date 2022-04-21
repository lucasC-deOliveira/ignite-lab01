import { CoursesService } from "src/services/courses.service";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { Enrollment } from "../models/enrollments";
export declare class EnrolmentsResolver {
    private enrollmentsService;
    private cousesService;
    private studentsService;
    constructor(enrollmentsService: EnrollmentsService, cousesService: CoursesService, studentsService: StudentsService);
    enrollments(): Promise<import(".prisma/client").Enrollment[]>;
    course(enrollment: Enrollment): import(".prisma/client").Prisma.Prisma__CourseClient<import(".prisma/client").Course>;
    student(enrollment: Enrollment): import(".prisma/client").Prisma.Prisma__StudentClient<import(".prisma/client").Student>;
}
