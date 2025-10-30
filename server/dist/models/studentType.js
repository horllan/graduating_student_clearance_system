var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ObjectType, Field, InputType, ID } from "type-graphql";
import { UserType } from "./userType.js";
import shortid from "shortid";
let StudentType = class StudentType extends UserType {
    facultyId;
    departmentId;
    clearanceStatus;
    matricNumber;
    eligibilityStatus;
    constructor(init) {
        super(init);
        Object.assign(this, init);
    }
};
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], StudentType.prototype, "facultyId", void 0);
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], StudentType.prototype, "departmentId", void 0);
__decorate([
    Field(type => Boolean),
    __metadata("design:type", Boolean)
], StudentType.prototype, "clearanceStatus", void 0);
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], StudentType.prototype, "matricNumber", void 0);
__decorate([
    Field(type => Boolean),
    __metadata("design:type", Boolean)
], StudentType.prototype, "eligibilityStatus", void 0);
StudentType = __decorate([
    ObjectType(),
    __metadata("design:paramtypes", [StudentType])
], StudentType);
export { StudentType };
let StudentInputType = class StudentInputType {
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
    role = "STUDENT";
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
], StudentInputType.prototype, "facultyId", void 0);
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], StudentInputType.prototype, "departmentId", void 0);
__decorate([
    Field(type => Boolean),
    __metadata("design:type", Boolean)
], StudentInputType.prototype, "clearanceStatus", void 0);
__decorate([
    Field(type => String),
    __metadata("design:type", String)
], StudentInputType.prototype, "matricNumber", void 0);
__decorate([
    Field(type => Boolean),
    __metadata("design:type", Boolean)
], StudentInputType.prototype, "eligibilityStatus", void 0);
__decorate([
    Field(type => ID),
    __metadata("design:type", String)
], StudentInputType.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], StudentInputType.prototype, "firstName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], StudentInputType.prototype, "lastName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], StudentInputType.prototype, "otherName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], StudentInputType.prototype, "email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], StudentInputType.prototype, "role", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], StudentInputType.prototype, "password", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], StudentInputType.prototype, "createdAt", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], StudentInputType.prototype, "updatedAt", void 0);
StudentInputType = __decorate([
    InputType(),
    __metadata("design:paramtypes", [Object])
], StudentInputType);
export { StudentInputType };
//# sourceMappingURL=studentType.js.map