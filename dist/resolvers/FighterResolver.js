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
exports.FighterResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Fighter_1 = require("../entities/Fighter");
const data_source_1 = require("../db/data-source");
const CreateFighterInput_1 = require("../graphql/inputs/CreateFighterInput");
const UpdateFighterInput_1 = require("../graphql/inputs/UpdateFighterInput");
let FighterResolver = class FighterResolver {
    fighterRepo = data_source_1.AppDataSource.getRepository(Fighter_1.Fighter);
    async getFighters() {
        return data_source_1.AppDataSource.getRepository(Fighter_1.Fighter).find();
    }
    async createFighter(input) {
        const fighterRepo = data_source_1.AppDataSource.getRepository(Fighter_1.Fighter);
        const fighter = fighterRepo.create(input);
        return fighterRepo.save(fighter);
    }
    async updateFighter(input) {
        const { fighterId, bio, firstName, lastName, weightClass, photoUrl } = input;
        const fighter = await this.fighterRepo.findOne({ where: { id: fighterId } });
        if (!fighter) {
            throw new Error('Fighter not found');
        }
        if (bio !== undefined)
            fighter.bio = bio;
        if (firstName !== undefined)
            fighter.firstName = firstName;
        if (lastName !== undefined)
            fighter.lastName = lastName;
        if (weightClass !== undefined)
            fighter.weightClass = weightClass;
        if (photoUrl !== undefined)
            fighter.photoUrl = photoUrl;
        return this.fighterRepo.save(fighter);
    }
};
exports.FighterResolver = FighterResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Fighter_1.Fighter]) // Ensure GraphQL output type is explicit
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FighterResolver.prototype, "getFighters", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Fighter_1.Fighter),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFighterInput_1.CreateFighterInput]),
    __metadata("design:returntype", Promise)
], FighterResolver.prototype, "createFighter", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Fighter_1.Fighter),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateFighterInput_1.UpdateFighterInput]),
    __metadata("design:returntype", Promise)
], FighterResolver.prototype, "updateFighter", null);
exports.FighterResolver = FighterResolver = __decorate([
    (0, type_graphql_1.Resolver)(Fighter_1.Fighter) // Attach entity to resolver
], FighterResolver);
