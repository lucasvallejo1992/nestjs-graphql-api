import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';
import { ValidRoles } from 'src/auth/enums/valid-roles.enum';

@ArgsType()
export class RolesArgs {
  @Field(() => [ValidRoles], { nullable: true, defaultValue: [] })
  @IsArray()
  roles: ValidRoles[] = [];
}
