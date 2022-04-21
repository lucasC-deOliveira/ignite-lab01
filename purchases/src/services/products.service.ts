import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import slugify from "slugify"

interface CreateProductsParams{
  title:string;
}


@Injectable()
export class ProductsService{
  constructor(
    private prisma: PrismaService
  ){}

    async listAllProducts(){
      return await this.prisma.product.findMany()
    }

    async createProduct({title}:CreateProductsParams){
      const slug = slugify(title,{
        lower:true
      });
      
      const productWithSameSlug = await this.prisma.product.findUnique({
        where:{
          slug
        }
      })


      console.log(productWithSameSlug)

      if(productWithSameSlug){
        throw new Error("Another product with same slug already exists")
      }

      return await this.prisma.product.create({
        data:{
          title,
          slug
        }
      })
    }

    async getProductsById(id:string){
      return await this.prisma.product.findUnique({
        where:{
          id
        }
      })
    }

}

