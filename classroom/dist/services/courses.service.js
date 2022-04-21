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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma/prisma.service");
const slugify_1 = __importDefault(require("slugify"));
let CoursesService = class CoursesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    listAllCourses() {
        return this.prisma.course.findMany();
    }
    getCourseById(id) {
        return this.prisma.course.findUnique({
            where: {
                id
            }
        });
    }
    async createCourse({ title }) {
        const slug = (0, slugify_1.default)(title, {
            lower: true
        });
        const courseAlreadyExists = await this.prisma.course.findUnique({
            where: {
                slug
            }
        });
        if (courseAlreadyExists) {
            throw new Error("Curso already exists");
        }
        return await this.prisma.course.create({
            data: {
                title,
                slug
            }
        });
    }
};
CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map