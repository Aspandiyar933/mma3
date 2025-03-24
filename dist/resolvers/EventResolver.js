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
exports.EventResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Event_1 = require("../entities/Event");
const data_source_1 = require("../db/data-source");
const CreateEventInput_1 = require("../graphql/inputs/CreateEventInput");
let EventResolver = class EventResolver {
    eventRepo = data_source_1.AppDataSource.getRepository(Event_1.Event);
    async getAllEvents() {
        return this.eventRepo.find();
    }
    async createEvent(input) {
        const event = this.eventRepo.create(input);
        return this.eventRepo.save(event);
    }
    async getEventById(eventId) {
        return this.eventRepo.findOne({
            where: { id: eventId },
            relations: ['fights', 'fights.fighter1', 'fights.fighter2', 'fights.winner'],
        });
    }
    async deleteEvent(eventId) {
        const event = await this.eventRepo.findOne({ where: { id: eventId } });
        if (!event) {
            throw new Error('Event not found');
        }
        await this.eventRepo.remove(event);
        return true;
    }
};
exports.EventResolver = EventResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Event_1.Event]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "getAllEvents", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Event_1.Event),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEventInput_1.CreateEventInput]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "createEvent", null);
__decorate([
    (0, type_graphql_1.Query)(() => Event_1.Event, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "getEventById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventResolver.prototype, "deleteEvent", null);
exports.EventResolver = EventResolver = __decorate([
    (0, type_graphql_1.Resolver)(Event_1.Event)
], EventResolver);
