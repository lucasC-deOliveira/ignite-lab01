import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface GetByCourseAndStudentIdParams{
  courseId: string;
  studentId: string;
}


@Injectable()
export class EnrollmentsService{
    constructor(private prisma: PrismaService){}

    async listAllEnrollments(){
      return await this.prisma.enrollment.findMany({
        where:{
          createdAt: undefined,
        },
        orderBy:{
          createdAt: 'desc'
        }
      })
    }

    async listEnrollmentsByStudent(studentId:string){
      return await this.prisma.enrollment.findMany({
        where:{
          studentId,
          canceledAt: null
        },
        orderBy:{
          createdAt: "desc"
        }
      })
    }


    async getByCourseAndStudentsId({studentId,courseId}:GetByCourseAndStudentIdParams){
      return await this.prisma.enrollment.findFirst({
        where: {
          courseId,
          studentId,
          createdAt: undefined
        }
      })
    }
}