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
import { Fighter } from './Fighter';
let Ranking = (() => {
    let _classDecorators = [ObjectType(), Entity()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _fighter_decorators;
    let _fighter_initializers = [];
    let _fighter_extraInitializers = [];
    let _weightClass_decorators;
    let _weightClass_initializers = [];
    let _weightClass_extraInitializers = [];
    let _rank_decorators;
    let _rank_initializers = [];
    let _rank_extraInitializers = [];
    var Ranking = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.fighter = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _fighter_initializers, void 0));
            this.weightClass = (__runInitializers(this, _fighter_extraInitializers), __runInitializers(this, _weightClass_initializers, void 0));
            this.rank = (__runInitializers(this, _weightClass_extraInitializers), __runInitializers(this, _rank_initializers, void 0));
            __runInitializers(this, _rank_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Ranking");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [Field(() => ID), PrimaryGeneratedColumn('uuid')];
        _fighter_decorators = [Field(() => Fighter), ManyToOne(() => Fighter)];
        _weightClass_decorators = [Field(), Column()];
        _rank_decorators = [Field(() => Int), Column()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _fighter_decorators, { kind: "field", name: "fighter", static: false, private: false, access: { has: obj => "fighter" in obj, get: obj => obj.fighter, set: (obj, value) => { obj.fighter = value; } }, metadata: _metadata }, _fighter_initializers, _fighter_extraInitializers);
        __esDecorate(null, null, _weightClass_decorators, { kind: "field", name: "weightClass", static: false, private: false, access: { has: obj => "weightClass" in obj, get: obj => obj.weightClass, set: (obj, value) => { obj.weightClass = value; } }, metadata: _metadata }, _weightClass_initializers, _weightClass_extraInitializers);
        __esDecorate(null, null, _rank_decorators, { kind: "field", name: "rank", static: false, private: false, access: { has: obj => "rank" in obj, get: obj => obj.rank, set: (obj, value) => { obj.rank = value; } }, metadata: _metadata }, _rank_initializers, _rank_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Ranking = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Ranking = _classThis;
})();
export { Ranking };
