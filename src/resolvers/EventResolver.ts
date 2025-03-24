import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Event } from "../entities/Event";
import { AppDataSource } from "../db/data-source";
import { CreateEventInput } from "../graphql/inputs/CreateEventInput";

@Resolver(Event)
export class EventResolver {
  private eventRepo = AppDataSource.getRepository(Event);

  @Query(() => [Event])
  async getAllEvents(): Promise<Event[]> {
    return this.eventRepo.find();
  }

  @Mutation(() => Event)
  async createEvent(@Arg("input") input: CreateEventInput): Promise<Event> {
    const event = this.eventRepo.create(input);
    return this.eventRepo.save(event);
  }


  @Query(() => Event, { nullable: true })
  async getEventById(@Arg('eventId') eventId: string): Promise<Event | null> {
    return this.eventRepo.findOne({
      where: { id: eventId },
      relations: ['fights', 'fights.fighter1', 'fights.fighter2', 'fights.winner'],
    });
  }

  @Mutation(() => Boolean)
  async deleteEvent(@Arg('eventId') eventId: string): Promise<boolean> {
    const event = await this.eventRepo.findOne({ where: { id: eventId } });
    if (!event) {
      throw new Error('Event not found');
    }

    await this.eventRepo.remove(event);
    return true;
  }
}
