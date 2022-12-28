import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // debug: false,
      // playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
