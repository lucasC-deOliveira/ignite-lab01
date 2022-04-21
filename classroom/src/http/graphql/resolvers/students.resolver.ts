import {  UseGuards } from "@nestjs/common";
import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { AuthUser, currentUser } from "src/http/auth/currentUser";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { Student } from "../models/student";

@Resolver(() => Student)
export class StudentsResolver {

  constructor(private studentsService: StudentsService,
    private enrolmentsService: EnrollmentsService
    ){}

    @Query(() => Student)
    @UseGuards(AuthorizationGuard)
    me(
      @currentUser() user: AuthUser
    ) {
      return this.studentsService.getStudentsByAuthUserId(user.sub)
    }

  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students() {
    return this.studentsService.listAllStudents()
  }

  @ResolveField()
  enrollments(@Parent() student: Student){
    return this.enrolmentsService.listEnrollmentsByStudent(student.id)
  }

}