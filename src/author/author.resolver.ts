import { Resolver, Query } from "@nestjs/graphql";


@Resolver('Author')
export class AuthorResolver {

    @Query(() => String)
    async hello() {
        return 'Hello';
    }

}