import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { Fighter } from "../entities/Fighter";
import { AppDataSource } from "../db/data-source";
import { CreateFighterInput } from "../graphql/inputs/CreateFighterInput";
import { UpdateFighterInput } from "../graphql/inputs/UpdateFighterInput";

@Resolver(Fighter) // Attach entity to resolver
export class FighterResolver {
  private fighterRepo = AppDataSource.getRepository(Fighter);

  @Query(() => [Fighter]) // Ensure GraphQL output type is explicit
  async getFighters(): Promise<Fighter[]> {
    return AppDataSource.getRepository(Fighter).find();
  }

  @Mutation(() => Fighter)
  async createFighter(
    @Arg("input") input: CreateFighterInput
  ): Promise<Fighter> {
    const fighterRepo = AppDataSource.getRepository(Fighter);
    const fighter = fighterRepo.create(input);
    return fighterRepo.save(fighter);
  }

  @Mutation(() => Fighter)
  async updateFighter(
    @Arg('input') input: UpdateFighterInput
  ): Promise<Fighter> {
    const { fighterId, bio, firstName, lastName, weightClass, photoUrl } = input;

    const fighter = await this.fighterRepo.findOne({ where: { id: fighterId } });
    if (!fighter) {
      throw new Error('Fighter not found');
    }

    if (bio !== undefined) fighter.bio = bio;
    if (firstName !== undefined) fighter.firstName = firstName;
    if (lastName !== undefined) fighter.lastName = lastName;
    if (weightClass !== undefined) fighter.weightClass = weightClass;
    if (photoUrl !== undefined) fighter.photoUrl = photoUrl;

    return this.fighterRepo.save(fighter);
  }
}

