var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Event } from './Event';
import { Fighter } from './Fighter';
let Fight = (() => {
    let _classDecorators = [ObjectType(), Entity()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _event_decorators;
    let _event_initializers = [];
    let _event_extraInitializers = [];
    let _fighter1_decorators;
    let _fighter1_initializers = [];
    let _fighter1_extraInitializers = [];
    let _fighter2_decorators;
    let _fighter2_initializers = [];
    let _fighter2_extraInitializers = [];
    let _winner_decorators;
    let _winner_initializers = [];
    let _winner_extraInitializers = [];
    let _method_decorators;
    let _method_initializers = [];
    let _method_extraInitializers = [];
    let _round_decorators;
    let _round_initializers = [];
    let _round_extraInitializers = [];
    var Fight = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.event = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _event_initializers, void 0));
            this.fighter1 = (__runInitializers(this, _event_extraInitializers), __runInitializers(this, _fighter1_initializers, void 0));
            this.fighter2 = (__runInitializers(this, _fighter1_extraInitializers), __runInitializers(this, _fighter2_initializers, void 0));
            this.winner = (__runInitializers(this, _fighter2_extraInitializers), __runInitializers(this, _winner_initializers, void 0));
            this.method = (__runInitializers(this, _winner_extraInitializers), __runInitializers(this, _method_initializers, void 0));
            this.round = (__runInitializers(this, _method_extraInitializers), __runInitializers(this, _round_initializers, void 0));
            __runInitializers(this, _round_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Fight");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [Field(() => ID), PrimaryGeneratedColumn('uuid')];
        _event_decorators = [Field(() => Event), ManyToOne(() => Event, (event) => event.fights, { onDelete: 'CASCADE' })];
        _fighter1_decorators = [Field(() => Fighter), ManyToOne(() => Fighter, { eager: true })];
        _fighter2_decorators = [Field(() => Fighter), ManyToOne(() => Fighter, { eager: true })];
        _winner_decorators = [Field(() => Fighter, { nullable: true }), ManyToOne(() => Fighter, { eager: true, nullable: true })];
        _method_decorators = [Field(), Column({ type: 'enum', enum: ['KO', 'Submission', 'Decision', 'Draw', 'No Contest'] })];
        _round_decorators = [Field(() => Int, { nullable: true }), Column({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _event_decorators, { kind: "field", name: "event", static: false, private: false, access: { has: obj => "event" in obj, get: obj => obj.event, set: (obj, value) => { obj.event = value; } }, metadata: _metadata }, _event_initializers, _event_extraInitializers);
        __esDecorate(null, null, _fighter1_decorators, { kind: "field", name: "fighter1", static: false, private: false, access: { has: obj => "fighter1" in obj, get: obj => obj.fighter1, set: (obj, value) => { obj.fighter1 = value; } }, metadata: _metadata }, _fighter1_initializers, _fighter1_extraInitializers);
        __esDecorate(null, null, _fighter2_decorators, { kind: "field", name: "fighter2", static: false, private: false, access: { has: obj => "fighter2" in obj, get: obj => obj.fighter2, set: (obj, value) => { obj.fighter2 = value; } }, metadata: _metadata }, _fighter2_initializers, _fighter2_extraInitializers);
        __esDecorate(null, null, _winner_decorators, { kind: "field", name: "winner", static: false, private: false, access: { has: obj => "winner" in obj, get: obj => obj.winner, set: (obj, value) => { obj.winner = value; } }, metadata: _metadata }, _winner_initializers, _winner_extraInitializers);
        __esDecorate(null, null, _method_decorators, { kind: "field", name: "method", static: false, private: false, access: { has: obj => "method" in obj, get: obj => obj.method, set: (obj, value) => { obj.method = value; } }, metadata: _metadata }, _method_initializers, _method_extraInitializers);
        __esDecorate(null, null, _round_decorators, { kind: "field", name: "round", static: false, private: false, access: { has: obj => "round" in obj, get: obj => obj.round, set: (obj, value) => { obj.round = value; } }, metadata: _metadata }, _round_initializers, _round_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Fight = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Fight = _classThis;
})();
export { Fight };
