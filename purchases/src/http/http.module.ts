import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import path from "node:path"

import { DatabaseModule } from 'src/database/database.module';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { ProductsService } from 'src/services/products.service';
import { PurchaseResolver } from './graphql/resolvers/puschases.resolver';
import { PurchaseService } from 'src/services/purchases.service';
import { CustomersService } from 'src/services/customers.service';
import { CustomersResolver } from './graphql/resolvers/customer.resolver';


@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        GraphQLModule.forRoot({
            driver:ApolloDriver,
            autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
        }),
    ],
   providers: [ProductsResolver, ProductsService,PurchaseResolver,PurchaseService, CustomersService, CustomersResolver]
})
export class HttpModule {

}
