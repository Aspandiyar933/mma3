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
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
let Fighter = (() => {
    let _classDecorators = [ObjectType(), Entity()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _firstName_decorators;
    let _firstName_initializers = [];
    let _firstName_extraInitializers = [];
    let _lastName_decorators;
    let _lastName_initializers = [];
    let _lastName_extraInitializers = [];
    let _nickname_decorators;
    let _nickname_initializers = [];
    let _nickname_extraInitializers = [];
    let _weightClass_decorators;
    let _weightClass_initializers = [];
    let _weightClass_extraInitializers = [];
    let _wins_decorators;
    let _wins_initializers = [];
    let _wins_extraInitializers = [];
    let _losses_decorators;
    let _losses_initializers = [];
    let _losses_extraInitializers = [];
    let _photoUrl_decorators;
    let _photoUrl_initializers = [];
    let _photoUrl_extraInitializers = [];
    let _bio_decorators;
    let _bio_initializers = [];
    let _bio_extraInitializers = [];
    var Fighter = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.firstName = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _firstName_initializers, void 0));
            this.lastName = (__runInitializers(this, _firstName_extraInitializers), __runInitializers(this, _lastName_initializers, void 0));
            this.nickname = (__runInitializers(this, _lastName_extraInitializers), __runInitializers(this, _nickname_initializers, void 0));
            this.weightClass = (__runInitializers(this, _nickname_extraInitializers), __runInitializers(this, _weightClass_initializers, void 0));
            this.wins = (__runInitializers(this, _weightClass_extraInitializers), __runInitializers(this, _wins_initializers, void 0));
            this.losses = (__runInitializers(this, _wins_extraInitializers), __runInitializers(this, _losses_initializers, void 0));
            this.photoUrl = (__runInitializers(this, _losses_extraInitializers), __runInitializers(this, _photoUrl_initializers, void 0));
            this.bio = (__runInitializers(this, _photoUrl_extraInitializers), __runInitializers(this, _bio_initializers, void 0));
            __runInitializers(this, _bio_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Fighter");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [Field(() => ID), PrimaryGeneratedColumn('uuid')];
        _firstName_decorators = [Field(), Column()];
        _lastName_decorators = [Field(), Column()];
        _nickname_decorators = [Field({ nullable: true }), Column({ nullable: true })];
        _weightClass_decorators = [Field(), Column()];
        _wins_decorators = [Field(() => Int, { defaultValue: 0 }), Column({ default: 0 })];
        _losses_decorators = [Field(() => Int, { defaultValue: 0 }), Column({ default: 0 })];
        _photoUrl_decorators = [Field({ nullable: true }), Column({ nullable: true })];
        _bio_decorators = [Field({ nullable: true }), Column({ nullable: true, type: 'text' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: obj => "firstName" in obj, get: obj => obj.firstName, set: (obj, value) => { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
        __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: obj => "lastName" in obj, get: obj => obj.lastName, set: (obj, value) => { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _lastName_extraInitializers);
        __esDecorate(null, null, _nickname_decorators, { kind: "field", name: "nickname", static: false, private: false, access: { has: obj => "nickname" in obj, get: obj => obj.nickname, set: (obj, value) => { obj.nickname = value; } }, metadata: _metadata }, _nickname_initializers, _nickname_extraInitializers);
        __esDecorate(null, null, _weightClass_decorators, { kind: "field", name: "weightClass", static: false, private: false, access: { has: obj => "weightClass" in obj, get: obj => obj.weightClass, set: (obj, value) => { obj.weightClass = value; } }, metadata: _metadata }, _weightClass_initializers, _weightClass_extraInitializers);
        __esDecorate(null, null, _wins_decorators, { kind: "field", name: "wins", static: false, private: false, access: { has: obj => "wins" in obj, get: obj => obj.wins, set: (obj, value) => { obj.wins = value; } }, metadata: _metadata }, _wins_initializers, _wins_extraInitializers);
        __esDecorate(null, null, _losses_decorators, { kind: "field", name: "losses", static: false, private: false, access: { has: obj => "losses" in obj, get: obj => obj.losses, set: (obj, value) => { obj.losses = value; } }, metadata: _metadata }, _losses_initializers, _losses_extraInitializers);
        __esDecorate(null, null, _photoUrl_decorators, { kind: "field", name: "photoUrl", static: false, private: false, access: { has: obj => "photoUrl" in obj, get: obj => obj.photoUrl, set: (obj, value) => { obj.photoUrl = value; } }, metadata: _metadata }, _photoUrl_initializers, _photoUrl_extraInitializers);
        __esDecorate(null, null, _bio_decorators, { kind: "field", name: "bio", static: false, private: false, access: { has: obj => "bio" in obj, get: obj => obj.bio, set: (obj, value) => { obj.bio = value; } }, metadata: _metadata }, _bio_initializers, _bio_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Fighter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Fighter = _classThis;
})();
export { Fighter };
