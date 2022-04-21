import { UseGuards } from "@nestjs/common";
import { Mutation, Parent, Query, ResolveField, Resolver, Args } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { AuthUser, currentUser } from "src/http/auth/currentUser";
import { CustomersService } from "src/services/customers.service";
import { ProductsService } from "src/services/products.service";
import { PurchaseService } from "src/services/purchases.service";
import { CreatePurchaseinput } from "../inputs/create-purchase-input";
import { Product } from "../models/product";
import { Purchase } from "../models/purchases";


@Resolver(() => Purchase)
export class PurchaseResolver {
  constructor(private purchaseService: PurchaseService,
    private productsService: ProductsService,
    private customersService : CustomersService
    ) { }

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  async purchases() {
    return await this.purchaseService.listAllPurchases()
  }

  @ResolveField()
  async product(
    @Parent()
    purchase: Purchase
  ) {
    return await this.productsService.getProductsById(purchase.productId)
  }

  @Mutation(() => Purchase)
  @UseGuards(AuthorizationGuard)
  async createPurchase(
    @Args('data')
     data: CreatePurchaseinput,
    @currentUser() 
    user:AuthUser) {
      console.log(user.sub)
    let customer =await this.customersService.getCustomerByAuthUserId(user.sub)

    if(!customer){
      customer = await this.customersService.createCustomer({
        authUserId: user.sub
      })
    }

    return this.purchaseService.createPurchase({
      customerId: customer.id,
      productId: data.productId
    })
    }
      

}