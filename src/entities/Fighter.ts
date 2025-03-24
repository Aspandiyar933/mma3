import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType() // Ensures compatibility with GraphQL
@Entity()
export class Fighter {
  @Field(() => ID) // Explicitly define GraphQL type
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field() // Maps to GraphQL field
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  nickname!: string;

  @Field()
  @Column()
  weightClass!: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  wins!: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  losses!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  photoUrl?: string;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'text' })
  bio?: string;
}
