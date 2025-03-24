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
import { Event } from "../entities/Event";
import { AppDataSource } from "../db/data-source";
let EventResolver = (() => {
    let _classDecorators = [Resolver(Event)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getAllEvents_decorators;
    let _createEvent_decorators;
    let _getEventById_decorators;
    let _deleteEvent_decorators;
    var EventResolver = _classThis = class {
        constructor() {
            this.eventRepo = (__runInitializers(this, _instanceExtraInitializers), AppDataSource.getRepository(Event));
        }
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
    __setFunctionName(_classThis, "EventResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getAllEvents_decorators = [Query(() => [Event])];
        _createEvent_decorators = [Mutation(() => Event)];
        _getEventById_decorators = [Query(() => Event, { nullable: true })];
        _deleteEvent_decorators = [Mutation(() => Boolean)];
        __esDecorate(_classThis, null, _getAllEvents_decorators, { kind: "method", name: "getAllEvents", static: false, private: false, access: { has: obj => "getAllEvents" in obj, get: obj => obj.getAllEvents }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createEvent_decorators, { kind: "method", name: "createEvent", static: false, private: false, access: { has: obj => "createEvent" in obj, get: obj => obj.createEvent }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getEventById_decorators, { kind: "method", name: "getEventById", static: false, private: false, access: { has: obj => "getEventById" in obj, get: obj => obj.getEventById }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteEvent_decorators, { kind: "method", name: "deleteEvent", static: false, private: false, access: { has: obj => "deleteEvent" in obj, get: obj => obj.deleteEvent }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EventResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EventResolver = _classThis;
})();
export { EventResolver };
