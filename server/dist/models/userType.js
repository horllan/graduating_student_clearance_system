var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ObjectType, Field, ID } from "type-graphql";
import shortid from "shortid";
let UserType = class UserType {
    id;
    firstName;
    lastName;
    otherName;
    email;
    role;
    password;
    createdAt;
    updatedAt;
    constructor(init) {
        Object.assign(this, init);
        this.id = shortid.generate();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    Field(type => ID),
    __metadata("design:type", String)
], UserType.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserType.prototype, "firstName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserType.prototype, "lastName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserType.prototype, "otherName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserType.prototype, "role", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserType.prototype, "password", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], UserType.prototype, "createdAt", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], UserType.prototype, "updatedAt", void 0);
UserType = __decorate([
    ObjectType(),
    __metadata("design:paramtypes", [Object])
], UserType);
export { UserType };
//# sourceMappingURL=userType.js.map