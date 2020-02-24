import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GqlModuleOptions } from "@nestjs/graphql";
import { AuthorModule } from './author/author.module';

const gqlModuleOptions: GqlModuleOptions = {
  autoSchemaFile: 'schema.gql',
  playground: true,
  debug: false,
}

@Module({
  imports: [
    GraphQLModule.forRoot(gqlModuleOptions),
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
