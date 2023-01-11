import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { RolesArgs } from './dto/args/roles.args';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  findAll(
    @Args()
    findAllRoles: RolesArgs,
  ): Promise<User[]> {
    console.log(findAllRoles);
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.usersService.findOneById(id);
  }

  @Mutation(() => User)
  User(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
