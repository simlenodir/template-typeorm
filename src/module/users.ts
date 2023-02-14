import { NextFunction, Request, Response } from "express"
import { ErrorHandler } from "../exeptions/erroHandler"
import bcrypt from "bcrypt"
import dataSource from "../config/ormconfig"
import { Users } from "../entities/users.entity"
import jwt from "../utils/jwt"
import { random } from "../utils/random"
import sendMail from "../utils/nodemailer"
import { Client } from "../config/redis.config"

export const usersAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { user_password, user_email, user_phone, user_name, user_pol } = req.body
    console.log(req.file);
    
    const { filename } = req.file as any
    const user_img = filename

    const saltRounds = 10

    const client = await Client()
    
    const existingUser = await dataSource.getRepository(Users).findOne({
      where: { user_email: user_email },
    })
    if (existingUser) {
      res.json({
        message: "Sorry this user exist",
      })
    }

    const hashPassword = await bcrypt.hash(user_password, saltRounds)
    
    if (!existingUser) {
      const randomCode = random()
      const newObject = {
        user_email,
        user_password: hashPassword,
        user_name,
        user_phone,
        user_pol,
        user_img,
      }

      await sendMail(user_email, randomCode)
      await client.setEx(randomCode, 24000, JSON.stringify([...randomCode, newObject]))

        res.status(201).json({
          message: "Code sended your email",
          status: 201,
        })
    }
  } catch (error: any) {
    console.log(error)
    throw new ErrorHandler(error.message, 503)
  }
}

// This Api should work after register user after code send to user email
export const loginUserRegister = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { emailCode } = req.body
    const client = await Client()
    const cacheLogin: string | null = await client.get(emailCode)
    if (cacheLogin) {
      const allLogin = JSON.parse(cacheLogin)

      if (allLogin.length) {
        const findUser = allLogin.find((e: any) => e.randomCode == emailCode)

        if (findUser) {
          const refreshToken = await client.get("refresh")

          if (!refreshToken) {
            await client.setEx("refresh", 3600, "1")
          }

          const setRefreshToken = await client.get("refresh")

          res.status(201).json({
            message: 'You logged successfully',
            token: jwt.sign(findUser?.user_id)
          })
        } else {
          throw new ErrorHandler("Not Found 1", 401)
        }
      } else {
        throw new ErrorHandler("Not Found 2", 401)
      }
    } else {
      throw new ErrorHandler("Not Found 3", 401)
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body
    const client = await Client()

    if (typeof email === "string" && typeof password === "string") {
      const cache: string | null = await client.get("allLogin")
      if (!cache) {
        const bazaFindUser: Users | null = await dataSource
          .getRepository(Users)
          .findOne({ where: { user_email: email } })

        if (bazaFindUser) {
          const randomCode: string = random()
          const newObj = {
            email,
            password,
            randomCode,
          }
          await client.setEx (randomCode, JSON.stringify([...randomCode, newObj]))
          await sendMail(email, randomCode)

          res.json({
            message: "Code send Mail",
            status: 200,
          })
        } else {
          throw new ErrorHandler("Not Found", 404)
        }
      } else {
        const findUsersInCache = JSON.parse(cache)

        const bazaFindUser: Users | null = await dataSource.getRepository(Users).findOneBy({ user_email: email })

        if (bazaFindUser) {
          const randomCode = random()
          const newObject = {
            email,
            password,
            randomCode,
          }
          await sendMail(email, randomCode)
          if (findUsersInCache) {
            await client.setEx(randomCode, 24000, JSON.stringify([...findUsersInCache, newObject]))
          } else {
            await client.setEx(randomCode, 24000,  JSON.stringify([newObject]))
          }

          res.json({
            message: "Code send Email",
            status: 200,
          })
        } else {
          throw new ErrorHandler("Not Found", 400)
        }
      }
    } else {
      throw new ErrorHandler("Bad Request", 401)
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const loginEmail = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { emailCode } = req.body
    const client = await Client()
    const cacheLogin: string | null = await client.get(emailCode)
    if (cacheLogin) {
      const allLogin = JSON.parse(cacheLogin)

      if (allLogin.length) {
        const findUser = allLogin.find((e: any) => e.randomCode == emailCode)

        if (findUser) {
          // const refreshToken = await client.get("refresh")

          // if (!refreshToken) {
          //   await client.setEx("refresh", 3600, "1")
          // }

          // const setRefreshToken = await client.get("refresh")

          res.status(201).json({
            token: jwt.sign(findUser.email)
          })
        } else {
          throw new ErrorHandler("Not Found 1", 401)
        }
      } else {
        throw new ErrorHandler("Not Found 2", 401)
      }
    } else {
      throw new ErrorHandler("Not Found 3", 401)
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}