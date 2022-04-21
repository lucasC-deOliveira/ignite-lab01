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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
const graphql_1 = require("@nestjs/graphql");
const course_1 = require("./course");
const student_1 = require("./student");
let Enrollment = class Enrollment {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Enrollment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => student_1.Student),
    __metadata("design:type", student_1.Student)
], Enrollment.prototype, "student", void 0);
__decorate([
    (0, graphql_1.Field)(() => course_1.Course),
    __metadata("design:type", course_1.Course)
], Enrollment.prototype, "course", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], Enrollment.prototype, "canceledAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Enrollment.prototype, "createdAt", void 0);
Enrollment = __decorate([
    (0, graphql_1.ObjectType)()
], Enrollment);
exports.Enrollment = Enrollment;
//# sourceMappingURL=enrollments.js.map