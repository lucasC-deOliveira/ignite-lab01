import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { AuthUser, currentUser } from "src/http/auth/currentUser";
import { CoursesService } from "src/services/courses.service";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { CreateCourseInput } from "../inputs/create-course-input";
import { Course } from "../models/course";



@Resolver(() => Course)
export class CoursesResolver {

  constructor(private cousesService: CoursesService,
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService) { }

  @Query(() => [Course])
  @UseGuards(AuthorizationGuard)
  couses() {
    return this.cousesService.listAllCourses()
  }


  @Mutation(() => Course)
  @UseGuards(AuthorizationGuard)
  async createCourse(
    @Args('data')
    data: CreateCourseInput
  ) {
    return await this.cousesService.createCourse(data);
  }

  @Query(() => Course)
  @UseGuards(AuthorizationGuard)
  async course(
    @Args('id')
    id: string,
    @currentUser()
    user: AuthUser

  ) {
    const student = await this.studentsService.getStudentsByAuthUserId(user.sub)

    if(!student){
      throw new Error("Student not found")
    }

    const enrollment = await this.enrollmentsService.getByCourseAndStudentsId({
      courseId:id,
      studentId: student.id
    })

    if(!enrollment){
      throw new UnauthorizedException();
    }
    return await this.cousesService.getCourseById(id)
  }

}