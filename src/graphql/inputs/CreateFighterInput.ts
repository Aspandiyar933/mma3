import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateFighterInput {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  weightClass!: string;

  @Field()
  nickname!: string;

  @Field()
  wins!: number;

  @Field()
  losses!: number;

  @Field()
  photoUrl?: string;

  @Field()
  bio?: string;
}
