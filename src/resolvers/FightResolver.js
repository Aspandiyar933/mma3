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
import { Resolver, Mutation } from "type-graphql";
import { Fight } from "../entities/Fight";
import { AppDataSource } from "../db/data-source";
import { Fighter } from "../entities/Fighter";
import { Event } from "../entities/Event";
let FightResolver = (() => {
    let _classDecorators = [Resolver(Fight)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _recordFight_decorators;
    var FightResolver = _classThis = class {
        constructor() {
            this.fightRepo = (__runInitializers(this, _instanceExtraInitializers), AppDataSource.getRepository(Fight));
            this.fighterRepo = AppDataSource.getRepository(Fighter);
            this.eventRepo = AppDataSource.getRepository(Event);
        }
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
    __setFunctionName(_classThis, "FightResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _recordFight_decorators = [Mutation(() => Fight)];
        __esDecorate(_classThis, null, _recordFight_decorators, { kind: "method", name: "recordFight", static: false, private: false, access: { has: obj => "recordFight" in obj, get: obj => obj.recordFight }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FightResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FightResolver = _classThis;
})();
export { FightResolver };
