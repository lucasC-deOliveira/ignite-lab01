import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import slugify from "slugify"
interface createCourseParams{
  title:string;
}



@Injectable()
export class CoursesService{
    constructor(private prisma: PrismaService){}

    listAllCourses(){
      return this.prisma.course.findMany();
    }

    getCourseById(id:string){
      return this.prisma.course.findUnique({
        where:{
          id
        }
      })
    }

    async createCourse({title}:createCourseParams){
        const slug = slugify(title,{
          lower: true
        })

        const courseAlreadyExists = await this.prisma.course.findUnique({
          where:{
            slug
          }
        })

        if(courseAlreadyExists){
          throw new Error("Curso already exists")
        }

        return  await this.prisma.course.create({
          data:{
            title,
            slug
          }
        })

    }

}