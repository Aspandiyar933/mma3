var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Resolver, Query, Mutation } from "type-graphql";
import { Fighter } from "../entities/Fighter";
import { AppDataSource } from "../db/data-source";
let FighterResolver = (() => {
    let _classDecorators = [Resolver(Fighter)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getFighters_decorators;
    let _createFighter_decorators;
    let _updateFighter_decorators;
    var FighterResolver = _classThis = class {
        constructor() {
            this.fighterRepo = (__runInitializers(this, _instanceExtraInitializers), AppDataSource.getRepository(Fighter));
        }
        async getFighters() {
            return AppDataSource.getRepository(Fighter).find();
        }
        async createFighter(input) {
            const fighterRepo = AppDataSource.getRepository(Fighter);
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
    __setFunctionName(_classThis, "FighterResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getFighters_decorators = [Query(() => [Fighter])];
        _createFighter_decorators = [Mutation(() => Fighter)];
        _updateFighter_decorators = [Mutation(() => Fighter)];
        __esDecorate(_classThis, null, _getFighters_decorators, { kind: "method", name: "getFighters", static: false, private: false, access: { has: obj => "getFighters" in obj, get: obj => obj.getFighters }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createFighter_decorators, { kind: "method", name: "createFighter", static: false, private: false, access: { has: obj => "createFighter" in obj, get: obj => obj.createFighter }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateFighter_decorators, { kind: "method", name: "updateFighter", static: false, private: false, access: { has: obj => "updateFighter" in obj, get: obj => obj.updateFighter }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FighterResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FighterResolver = _classThis;
})();
export { FighterResolver };
