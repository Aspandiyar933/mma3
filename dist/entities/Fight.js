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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fight = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Event_1 = require("./Event");
const Fighter_1 = require("./Fighter");
let Fight = class Fight {
    id;
    event;
    fighter1;
    fighter2;
    winner;
    method;
    round;
};
exports.Fight = Fight;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Fight.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Event_1.Event),
    (0, typeorm_1.ManyToOne)(() => Event_1.Event, (event) => event.fights, { onDelete: 'CASCADE' }),
    __metadata("design:type", Event_1.Event)
], Fight.prototype, "event", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Fighter_1.Fighter),
    (0, typeorm_1.ManyToOne)(() => Fighter_1.Fighter, { eager: true }),
    __metadata("design:type", Fighter_1.Fighter)
], Fight.prototype, "fighter1", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Fighter_1.Fighter),
    (0, typeorm_1.ManyToOne)(() => Fighter_1.Fighter, { eager: true }),
    __metadata("design:type", Fighter_1.Fighter)
], Fight.prototype, "fighter2", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Fighter_1.Fighter, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Fighter_1.Fighter, { eager: true, nullable: true }),
    __metadata("design:type", Fighter_1.Fighter)
], Fight.prototype, "winner", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'enum', enum: ['KO', 'Submission', 'Decision', 'Draw', 'No Contest'] }),
    __metadata("design:type", String)
], Fight.prototype, "method", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Fight.prototype, "round", void 0);
exports.Fight = Fight = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Fight);
