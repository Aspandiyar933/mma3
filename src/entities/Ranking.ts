import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Fighter } from './Fighter';

@ObjectType()
@Entity()
export class Ranking {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => Fighter)
  @ManyToOne(() => Fighter)
  fighter!: Fighter;

  @Field()
  @Column()
  weightClass!: string;

  @Field(() => Int)
  @Column()
  rank!: number;
}
