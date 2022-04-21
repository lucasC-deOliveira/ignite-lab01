"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const authorization_guard_1 = require("../../auth/authorization.guard");
const currentUser_1 = require("../../auth/currentUser");
const enrollments_service_1 = require("../../../services/enrollments.service");
const students_service_1 = require("../../../services/students.service");
const student_1 = require("../models/student");
let StudentsResolver = class StudentsResolver {
    constructor(studentsService, enrolmentsService) {
        this.studentsService = studentsService;
        this.enrolmentsService = enrolmentsService;
    }
    me(user) {
        return this.studentsService.getStudentsByAuthUserId(user.sub);
    }
    students() {
        return this.studentsService.listAllStudents();
    }
    enrollments(student) {
        return this.enrolmentsService.listEnrollmentsByStudent(student.id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => student_1.Student),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __param(0, (0, currentUser_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "me", null);
__decorate([
    (0, graphql_1.Query)(() => [student_1.Student]),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "students", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_1.Student]),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "enrollments", null);
StudentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => student_1.Student),
    __metadata("design:paramtypes", [students_service_1.StudentsService,
        enrollments_service_1.EnrollmentsService])
], StudentsResolver);
exports.StudentsResolver = StudentsResolver;
//# sourceMappingURL=students.resolver.js.map