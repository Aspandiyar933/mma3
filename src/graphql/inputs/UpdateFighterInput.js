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
import { InputType, Field } from 'type-graphql';
let UpdateFighterInput = (() => {
    let _classDecorators = [InputType()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _fighterId_decorators;
    let _fighterId_initializers = [];
    let _fighterId_extraInitializers = [];
    let _bio_decorators;
    let _bio_initializers = [];
    let _bio_extraInitializers = [];
    let _firstName_decorators;
    let _firstName_initializers = [];
    let _firstName_extraInitializers = [];
    let _lastName_decorators;
    let _lastName_initializers = [];
    let _lastName_extraInitializers = [];
    let _weightClass_decorators;
    let _weightClass_initializers = [];
    let _weightClass_extraInitializers = [];
    let _photoUrl_decorators;
    let _photoUrl_initializers = [];
    let _photoUrl_extraInitializers = [];
    var UpdateFighterInput = _classThis = class {
        constructor() {
            this.fighterId = __runInitializers(this, _fighterId_initializers, void 0);
            this.bio = (__runInitializers(this, _fighterId_extraInitializers), __runInitializers(this, _bio_initializers, void 0));
            this.firstName = (__runInitializers(this, _bio_extraInitializers), __runInitializers(this, _firstName_initializers, void 0));
            this.lastName = (__runInitializers(this, _firstName_extraInitializers), __runInitializers(this, _lastName_initializers, void 0));
            this.weightClass = (__runInitializers(this, _lastName_extraInitializers), __runInitializers(this, _weightClass_initializers, void 0));
            this.photoUrl = (__runInitializers(this, _weightClass_extraInitializers), __runInitializers(this, _photoUrl_initializers, void 0));
            __runInitializers(this, _photoUrl_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "UpdateFighterInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _fighterId_decorators = [Field()];
        _bio_decorators = [Field({ nullable: true })];
        _firstName_decorators = [Field({ nullable: true })];
        _lastName_decorators = [Field({ nullable: true })];
        _weightClass_decorators = [Field({ nullable: true })];
        _photoUrl_decorators = [Field({ nullable: true })];
        __esDecorate(null, null, _fighterId_decorators, { kind: "field", name: "fighterId", static: false, private: false, access: { has: obj => "fighterId" in obj, get: obj => obj.fighterId, set: (obj, value) => { obj.fighterId = value; } }, metadata: _metadata }, _fighterId_initializers, _fighterId_extraInitializers);
        __esDecorate(null, null, _bio_decorators, { kind: "field", name: "bio", static: false, private: false, access: { has: obj => "bio" in obj, get: obj => obj.bio, set: (obj, value) => { obj.bio = value; } }, metadata: _metadata }, _bio_initializers, _bio_extraInitializers);
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: obj => "firstName" in obj, get: obj => obj.firstName, set: (obj, value) => { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
        __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: obj => "lastName" in obj, get: obj => obj.lastName, set: (obj, value) => { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _lastName_extraInitializers);
        __esDecorate(null, null, _weightClass_decorators, { kind: "field", name: "weightClass", static: false, private: false, access: { has: obj => "weightClass" in obj, get: obj => obj.weightClass, set: (obj, value) => { obj.weightClass = value; } }, metadata: _metadata }, _weightClass_initializers, _weightClass_extraInitializers);
        __esDecorate(null, null, _photoUrl_decorators, { kind: "field", name: "photoUrl", static: false, private: false, access: { has: obj => "photoUrl" in obj, get: obj => obj.photoUrl, set: (obj, value) => { obj.photoUrl = value; } }, metadata: _metadata }, _photoUrl_initializers, _photoUrl_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UpdateFighterInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UpdateFighterInput = _classThis;
})();
export { UpdateFighterInput };
