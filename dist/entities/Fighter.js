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
exports.Fighter = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
let Fighter = class Fighter {
    id;
    firstName;
    lastName;
    nickname;
    weightClass;
    wins;
    losses;
    photoUrl;
    bio;
};
exports.Fighter = Fighter;
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID) // Explicitly define GraphQL type
    ,
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Fighter.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)() // Maps to GraphQL field
    ,
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Fighter.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Fighter.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Fighter.prototype, "nickname", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Fighter.prototype, "weightClass", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Fighter.prototype, "wins", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { defaultValue: 0 }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Fighter.prototype, "losses", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Fighter.prototype, "photoUrl", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], Fighter.prototype, "bio", void 0);
exports.Fighter = Fighter = __decorate([
    (0, type_graphql_1.ObjectType)() // Ensures compatibility with GraphQL
    ,
    (0, typeorm_1.Entity)()
], Fighter);
