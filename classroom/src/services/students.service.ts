import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class StudentsService{
    constructor(private prisma: PrismaService
      ){}

    async listAllStudents(){
      return this.prisma.student.findMany()
    }

    getStudentById(id:string){
      return this.prisma.student.findUnique({
        where:{
          id
        }
      })
    }

    async getStudentsByAuthUserId(authUserId:string){
      return  await this.prisma.student.findUnique({
        where:{
          authUserId
        }
      })
    }
  
}