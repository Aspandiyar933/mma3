import { InputType, Field } from 'type-graphql';

@InputType()
export class UpdateFighterInput {
  @Field()
  fighterId!: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  weightClass?: string;

  @Field({ nullable: true })
  photoUrl?: string;
}
