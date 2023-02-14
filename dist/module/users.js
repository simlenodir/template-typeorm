"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.usersAuth = void 0;
const erroHandler_1 = require("../exeptions/erroHandler");
const bcrypt_1 = __importDefault(require("bcrypt"));
const ormconfig_1 = __importDefault(require("../config/ormconfig"));
const users_entity_1 = require("../entities/users.entity");
const jwt_1 = __importDefault(require("../utils/jwt"));
const random_1 = require("../utils/random");
const nodemailer_1 = __importDefault(require("../utils/nodemailer"));
const redis_config_1 = require("../config/redis.config");
const usersAuth = async (req, res, next) => {
    try {
        const { user_password, user_email, user_phone, user_name } = req.body;
        console.log(req.file);
        const { filename } = req.file;
        const user_img = filename;
        const saltRounds = 10;
        const client = await (0, redis_config_1.Client)();
        const existingUser = await ormconfig_1.default.getRepository(users_entity_1.Users).findOne({
            where: { user_email: user_email },
        });
        if (existingUser) {
            res.json({
                message: "Sorry this user exist",
            });
        }
        if (existingUser) {
            const checkPassword = await bcrypt_1.default.compare(user_password, existingUser?.user_password);
        }
        const hashPassword = await bcrypt_1.default.hash(user_password, saltRounds);
        if (!existingUser) {
            const randomCode = (0, random_1.random)();
            await (0, nodemailer_1.default)(user_email, randomCode);
            await client.setEx('randomCode', 60000, JSON.stringify(randomCode));
            // const newUser = await dataSource
            //   .getRepository(Users)
            //   .createQueryBuilder()
            //   .insert()
            //   .into(Users)
            //   .values({ user_password:hashPassword, user_email, user_phone, user_name, user_img })
            //   .execute()
            //   console.log(newUser.raw[0].user_id);
            // if (newUser) {
            res.status(201).json({
                message: "Code sended your email",
                status: 201,
            });
            // }
        }
    }
    catch (error) {
        console.log(error);
        throw new erroHandler_1.ErrorHandler(error.message, 503);
    }
};
exports.usersAuth = usersAuth;
const loginUser = async (req, res, next) => {
    try {
        const { emailCode } = req.body;
        const client = await (0, redis_config_1.Client)();
        const cacheLogin = await client.get("allLogin");
        if (cacheLogin) {
            const allLogin = JSON.parse(cacheLogin);
            if (allLogin.length) {
                const findUser = allLogin.find((e) => e.uniqueRandom == emailCode);
                if (findUser) {
                    const refreshToken = await client.get("refresh");
                    if (!refreshToken) {
                        await client.setEx("refresh", 3600, "1");
                    }
                    const setRefreshToken = await client.get("refresh");
                    res.status(201).json({
                        message: 'You logged successfully',
                        token: jwt_1.default.sign(findUser?.user_id)
                        // bearer_token: sign(findUser.email),
                        // refresh_token: refreshToken ?? setRefreshToken,
                    });
                }
                else {
                    throw new erroHandler_1.ErrorHandler("Not Found 1", 401);
                }
            }
            else {
                throw new erroHandler_1.ErrorHandler("Not Found 2", 401);
            }
        }
        else {
            throw new erroHandler_1.ErrorHandler("Not Found 3", 401);
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
exports.loginUser = loginUser;
