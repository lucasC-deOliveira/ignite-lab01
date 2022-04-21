

import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { AuthUser, currentUser } from 'src/http/auth/currentUser';
import { CustomersService } from 'src/services/customers.service';
import { PurchaseService } from 'src/services/purchases.service';

import { Customer } from '../models/customers';
import { Product } from '../models/product';



@Resolver(() => Customer)
export class CustomersResolver {

  constructor(private customersService: CustomersService,
      private purchasesService : PurchaseService) { }

  @UseGuards(AuthorizationGuard)
  @Query(() => Customer)
  async me(
    @currentUser()
    user:AuthUser
  ) {
    return await this.customersService.getCustomerByAuthUserId(user.sub)
  }

  @ResolveField()
  async purchases(@Parent() customer: Customer){
    return await this.purchasesService.listAllPurchasesFromCustomer(customer.id)
  }
}
