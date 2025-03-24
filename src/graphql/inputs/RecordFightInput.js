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
import { InputType, Field, Int } from 'type-graphql';
let RecordFightInput = (() => {
    let _classDecorators = [InputType()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _eventId_decorators;
    let _eventId_initializers = [];
    let _eventId_extraInitializers = [];
    let _fighter1Id_decorators;
    let _fighter1Id_initializers = [];
    let _fighter1Id_extraInitializers = [];
    let _fighter2Id_decorators;
    let _fighter2Id_initializers = [];
    let _fighter2Id_extraInitializers = [];
    let _winnerId_decorators;
    let _winnerId_initializers = [];
    let _winnerId_extraInitializers = [];
    let _method_decorators;
    let _method_initializers = [];
    let _method_extraInitializers = [];
    let _round_decorators;
    let _round_initializers = [];
    let _round_extraInitializers = [];
    var RecordFightInput = _classThis = class {
        constructor() {
            this.eventId = __runInitializers(this, _eventId_initializers, void 0);
            this.fighter1Id = (__runInitializers(this, _eventId_extraInitializers), __runInitializers(this, _fighter1Id_initializers, void 0));
            this.fighter2Id = (__runInitializers(this, _fighter1Id_extraInitializers), __runInitializers(this, _fighter2Id_initializers, void 0));
            this.winnerId = (__runInitializers(this, _fighter2Id_extraInitializers), __runInitializers(this, _winnerId_initializers, void 0));
            this.method = (__runInitializers(this, _winnerId_extraInitializers), __runInitializers(this, _method_initializers, void 0));
            this.round = (__runInitializers(this, _method_extraInitializers), __runInitializers(this, _round_initializers, void 0));
            __runInitializers(this, _round_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "RecordFightInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _eventId_decorators = [Field()];
        _fighter1Id_decorators = [Field()];
        _fighter2Id_decorators = [Field()];
        _winnerId_decorators = [Field({ nullable: true })];
        _method_decorators = [Field()];
        _round_decorators = [Field(() => Int, { nullable: true })];
        __esDecorate(null, null, _eventId_decorators, { kind: "field", name: "eventId", static: false, private: false, access: { has: obj => "eventId" in obj, get: obj => obj.eventId, set: (obj, value) => { obj.eventId = value; } }, metadata: _metadata }, _eventId_initializers, _eventId_extraInitializers);
        __esDecorate(null, null, _fighter1Id_decorators, { kind: "field", name: "fighter1Id", static: false, private: false, access: { has: obj => "fighter1Id" in obj, get: obj => obj.fighter1Id, set: (obj, value) => { obj.fighter1Id = value; } }, metadata: _metadata }, _fighter1Id_initializers, _fighter1Id_extraInitializers);
        __esDecorate(null, null, _fighter2Id_decorators, { kind: "field", name: "fighter2Id", static: false, private: false, access: { has: obj => "fighter2Id" in obj, get: obj => obj.fighter2Id, set: (obj, value) => { obj.fighter2Id = value; } }, metadata: _metadata }, _fighter2Id_initializers, _fighter2Id_extraInitializers);
        __esDecorate(null, null, _winnerId_decorators, { kind: "field", name: "winnerId", static: false, private: false, access: { has: obj => "winnerId" in obj, get: obj => obj.winnerId, set: (obj, value) => { obj.winnerId = value; } }, metadata: _metadata }, _winnerId_initializers, _winnerId_extraInitializers);
        __esDecorate(null, null, _method_decorators, { kind: "field", name: "method", static: false, private: false, access: { has: obj => "method" in obj, get: obj => obj.method, set: (obj, value) => { obj.method = value; } }, metadata: _metadata }, _method_initializers, _method_extraInitializers);
        __esDecorate(null, null, _round_decorators, { kind: "field", name: "round", static: false, private: false, access: { has: obj => "round" in obj, get: obj => obj.round, set: (obj, value) => { obj.round = value; } }, metadata: _metadata }, _round_initializers, _round_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecordFightInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecordFightInput = _classThis;
})();
export { RecordFightInput };
