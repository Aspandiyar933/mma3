import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Event } from './Event';
import { Fighter } from './Fighter';

@ObjectType()
@Entity()
export class Fight {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => Event)
  @ManyToOne(() => Event, (event) => event.fights, { onDelete: 'CASCADE' })
  event!: Event;

  @Field(() => Fighter)
  @ManyToOne(() => Fighter, { eager: true })
  fighter1!: Fighter;

  @Field(() => Fighter)
  @ManyToOne(() => Fighter, { eager: true })
  fighter2!: Fighter;

  @Field(() => Fighter, { nullable: true })
  @ManyToOne(() => Fighter, { eager: true, nullable: true })
  winner?: Fighter;

  @Field()
  @Column({ type: 'enum', enum: ['KO', 'Submission', 'Decision', 'Draw', 'No Contest'] })
  method!: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  round?: number;
}
