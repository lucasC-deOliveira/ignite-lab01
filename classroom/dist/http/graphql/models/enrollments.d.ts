import { Course } from './course';
import { Student } from './student';
export declare class Enrollment {
    id: string;
    student: Student;
    studentId: string;
    course: Course;
    courseId: string;
    canceledAt: Date;
    createdAt: Date;
}
