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
exports.Ranking = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Fighter_1 = require("./Fighter");
let Ranking = class Ranking {
    id;
    fighter;
    weightClass;
    rank;
};
exports.Ranking = Ranking;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Ranking.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Fighter_1.Fighter),
    (0, typeorm_1.ManyToOne)(() => Fighter_1.Fighter),
    __metadata("design:type", Fighter_1.Fighter)
], Ranking.prototype, "fighter", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ranking.prototype, "weightClass", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ranking.prototype, "rank", void 0);
exports.Ranking = Ranking = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Ranking);
