var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { InputType, Field, ObjectType, ID } from "type-graphql";
import { UserType } from "./userType.js";
import shortid from "shortid";
let OfficialType = class OfficialType extends UserType {
    /**
     * Official that are responsible for clearing the students
     */
    staffId;
    office;
    clearedStudentsId;
    constructor(init) {
        super(init);
        Object.assign(this, init);
    }
};
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], OfficialType.prototype, "staffId", void 0);
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], OfficialType.prototype, "office", void 0);
__decorate([
    Field(type => [String]),
    __metadata("design:type", String)
], OfficialType.prototype, "clearedStudentsId", void 0);
OfficialType = __decorate([
    ObjectType(),
    __metadata("design:paramtypes", [OfficialType])
], OfficialType);
export { OfficialType };
let OfficialInputType = class OfficialInputType {
    facultyId;
    departmentId;
    clearanceStatus;
    matricNumber;
    eligibilityStatus;
    id;
    firstName;
    lastName;
    otherName;
    email;
    role = "OFFICIAL";
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
    Field(type => String),
    __metadata("design:type", String)
], OfficialInputType.prototype, "facultyId", void 0);
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], OfficialInputType.prototype, "departmentId", void 0);
__decorate([
    Field(type => Boolean),
    __metadata("design:type", Boolean)
], OfficialInputType.prototype, "clearanceStatus", void 0);
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], OfficialInputType.prototype, "matricNumber", void 0);
__decorate([
    Field(type => Boolean),
    __metadata("design:type", Boolean)
], OfficialInputType.prototype, "eligibilityStatus", void 0);
__decorate([
    Field(type => ID),
    __metadata("design:type", String)
], OfficialInputType.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], OfficialInputType.prototype, "firstName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], OfficialInputType.prototype, "lastName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], OfficialInputType.prototype, "otherName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], OfficialInputType.prototype, "email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], OfficialInputType.prototype, "role", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], OfficialInputType.prototype, "password", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], OfficialInputType.prototype, "createdAt", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], OfficialInputType.prototype, "updatedAt", void 0);
OfficialInputType = __decorate([
    InputType(),
    __metadata("design:paramtypes", [Object])
], OfficialInputType);
export { OfficialInputType };
//# sourceMappingURL=officialType.js.map