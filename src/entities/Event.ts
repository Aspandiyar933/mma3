import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Fight } from './Fight';

@ObjectType()
@Entity()
export class Event {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  location!: string;

  @Field()
  @Column()
  date!: string; // Ensure this is ISO-8601 formatted

  @Field(() => [Fight], { nullable: true })
  @OneToMany(() => Fight, (fight) => fight.event)
  fights?: Fight[];
}
