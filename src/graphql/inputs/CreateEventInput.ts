import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateEventInput {
  @Field()
  name!: string;

  @Field()
  location!: string;

  @Field()
  date!: string; // YYYY-MM-DD format
}
