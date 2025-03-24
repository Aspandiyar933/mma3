import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class RecordFightInput {
  @Field()
  eventId!: string;

  @Field()
  fighter1Id!: string;

  @Field()
  fighter2Id!: string;

  @Field({ nullable: true })
  winnerId?: string;

  @Field()
  method!: string;

  @Field(() => Int, { nullable: true })
  round?: number;
}
