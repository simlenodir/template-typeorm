"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const malter_1 = __importDefault(require("../utils/malter"));
const users_1 = require("./users");
const routes = (0, express_1.Router)();
exports.default = routes;
routes.post('/auth', malter_1.default.single('user_img'), users_1.usersAuth);
