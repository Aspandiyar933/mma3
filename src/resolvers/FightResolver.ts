import { Resolver, Mutation, Arg } from "type-graphql";
import { Fight } from "../entities/Fight";
import { AppDataSource } from "../db/data-source";
import { RecordFightInput } from "../graphql/inputs/RecordFightInput";
import { Fighter } from "../entities/Fighter";
import { Event } from "../entities/Event";

@Resolver(Fight)
export class FightResolver {
  private fightRepo = AppDataSource.getRepository(Fight);
  private fighterRepo = AppDataSource.getRepository(Fighter);
  private eventRepo = AppDataSource.getRepository(Event);

  @Mutation(() => Fight)
  async recordFight(@Arg("input") input: RecordFightInput): Promise<Fight> {
    const { eventId, fighter1Id, fighter2Id, winnerId, method, round } = input;

    // Fetch related entities
    const event = await this.eventRepo.findOneBy({ id: eventId });
    if (!event) throw new Error("Event not found");

    const fighter1 = await this.fighterRepo.findOneBy({ id: fighter1Id });
    const fighter2 = await this.fighterRepo.findOneBy({ id: fighter2Id });
    if (!fighter1 || !fighter2)
      throw new Error("One or both fighters not found");

    const winner = winnerId
      ? await this.fighterRepo.findOneBy({ id: winnerId })
      : undefined;

    // Ensure valid winner
    if (winnerId && !winner) throw new Error("Winner not found");

    // Save the fight
    const fight = this.fightRepo.create({
      event: { id: eventId },
      fighter1: { id: fighter1Id },
      fighter2: { id: fighter2Id },
      winner: winnerId ? { id: winnerId } : undefined,
      method,
      round,
    });

    return await this.fightRepo.save(fight);
  }
}
