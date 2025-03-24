"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FightResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Fight_1 = require("../entities/Fight");
const data_source_1 = require("../db/data-source");
const RecordFightInput_1 = require("../graphql/inputs/RecordFightInput");
const Fighter_1 = require("../entities/Fighter");
const Event_1 = require("../entities/Event");
let FightResolver = class FightResolver {
    fightRepo = data_source_1.AppDataSource.getRepository(Fight_1.Fight);
    fighterRepo = data_source_1.AppDataSource.getRepository(Fighter_1.Fighter);
    eventRepo = data_source_1.AppDataSource.getRepository(Event_1.Event);
    async recordFight(input) {
        const { eventId, fighter1Id, fighter2Id, winnerId, method, round } = input;
        // Fetch related entities
        const event = await this.eventRepo.findOneBy({ id: eventId });
        if (!event)
            throw new Error("Event not found");
        const fighter1 = await this.fighterRepo.findOneBy({ id: fighter1Id });
        const fighter2 = await this.fighterRepo.findOneBy({ id: fighter2Id });
        if (!fighter1 || !fighter2)
            throw new Error("One or both fighters not found");
        const winner = winnerId
            ? await this.fighterRepo.findOneBy({ id: winnerId })
            : undefined;
        // Ensure valid winner
        if (winnerId && !winner)
            throw new Error("Winner not found");
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
};
exports.FightResolver = FightResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => Fight_1.Fight),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RecordFightInput_1.RecordFightInput]),
    __metadata("design:returntype", Promise)
], FightResolver.prototype, "recordFight", null);
exports.FightResolver = FightResolver = __decorate([
    (0, type_graphql_1.Resolver)(Fight_1.Fight)
], FightResolver);
