var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Query, Mutation, ID, Arg } from 'type-graphql';
import { StudentInputType, StudentType } from './studentType.js';
import { deleteStudent, getStudents, updateStudent, getStudent, addStudent } from '../repositories/studentRepository.js';
export class ClearanceResolver {
    async getStudents() {
        return await getStudents();
    }
    async getStudent(id) {
        return await getStudent(id);
    }
    async updateStudent(id, data) {
        return await updateStudent(id, data);
    }
    async addStudent(data) {
        return await addStudent(new StudentInputType(data)) ? true : false;
    }
    async deleteStudent(id) {
        const deletedStudent = await deleteStudent(id);
        return deletedStudent ? true : false;
    }
}
__decorate([
    Query(returns => [StudentType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClearanceResolver.prototype, "getStudents", null);
__decorate([
    Query(returns => StudentType),
    __param(0, Arg("id", () => ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClearanceResolver.prototype, "getStudent", null);
__decorate([
    Mutation(() => StudentType, { nullable: true }),
    __param(0, Arg("id", () => ID)),
    __param(1, Arg("data", () => StudentInputType)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, StudentInputType]),
    __metadata("design:returntype", Promise)
], ClearanceResolver.prototype, "updateStudent", null);
__decorate([
    Mutation(() => Boolean),
    __param(0, Arg("data", () => StudentInputType, { nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StudentInputType]),
    __metadata("design:returntype", Promise)
], ClearanceResolver.prototype, "addStudent", null);
__decorate([
    Mutation(returns => Boolean),
    __param(0, Arg("id", () => ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClearanceResolver.prototype, "deleteStudent", null);
//# sourceMappingURL=clearanceResolver.js.map