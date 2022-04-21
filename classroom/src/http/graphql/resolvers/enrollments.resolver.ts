import { UseGuards } from "@nestjs/common";
import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { CoursesService } from "src/services/courses.service";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { Enrollment } from "../models/enrollments";


@Resolver(()=>Enrollment)
export class EnrolmentsResolver{
  constructor(private enrollmentsService:EnrollmentsService,
    private cousesService: CoursesService,
    private studentsService: StudentsService
    ){}

  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  async enrollments() {
    return  await this.enrollmentsService.listAllEnrollments()
  }

  @ResolveField()
  course(
    @Parent() enrollment:Enrollment
  ){
    return this.cousesService.getCourseById(enrollment.courseId)
  }

  @ResolveField()
  student(
    @Parent() enrollment:Enrollment
  ){
    return this.studentsService.getStudentById(enrollment.studentId)
  }

}