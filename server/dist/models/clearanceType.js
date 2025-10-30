var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import shortid from "shortid";
import { ObjectType, Field, ID } from "type-graphql";
import { StudentType } from "./studentType.js";
import { OfficialType } from "./officialType.js";
let ClearanceType = class ClearanceType {
    id;
    student;
    bursaryOfficial;
    examsRecords;
    studentAffiarsOfficial;
    alunmiOfficial;
    hod;
    sportOfficial;
    hostelOfficial;
    /**
     * Clearance Document with all fields
     */
    constructor(init) {
        Object.assign(this, init);
        this.id = shortid();
    }
};
__decorate([
    Field(type => ID),
    __metadata("design:type", String)
], ClearanceType.prototype, "id", void 0);
__decorate([
    Field(type => String),
    __metadata("design:type", StudentType)
], ClearanceType.prototype, "student", void 0);
__decorate([
    Field(),
    __metadata("design:type", OfficialType)
], ClearanceType.prototype, "bursaryOfficial", void 0);
__decorate([
    Field(),
    __metadata("design:type", OfficialType)
], ClearanceType.prototype, "examsRecords", void 0);
__decorate([
    Field(),
    __metadata("design:type", OfficialType)
], ClearanceType.prototype, "studentAffiarsOfficial", void 0);
__decorate([
    Field(),
    __metadata("design:type", OfficialType)
], ClearanceType.prototype, "alunmiOfficial", void 0);
__decorate([
    Field(),
    __metadata("design:type", OfficialType)
], ClearanceType.prototype, "hod", void 0);
__decorate([
    Field(),
    __metadata("design:type", OfficialType)
], ClearanceType.prototype, "sportOfficial", void 0);
__decorate([
    Field(),
    __metadata("design:type", OfficialType
    /**
     * Clearance Document with all fields
     */
    )
], ClearanceType.prototype, "hostelOfficial", void 0);
ClearanceType = __decorate([
    ObjectType(),
    __metadata("design:paramtypes", [ClearanceType])
], ClearanceType);
export { ClearanceType };
//# sourceMappingURL=clearanceType.js.map