import { Request,Response } from "express"
import { validatePassword } from "../service/user.services"
import { createSession } from "../service/session.services"

export async function createUserSessionHandler(req:Request,res:Response){
    const user = await validatePassword(req.body)

    if (!user) {
        return res.status(401).send("Invalid username or password")
        
    }

    // creating a session
    const session = await createSession(user._id,req.get("user agent")||"")

    // validate email and password,
    // create a session, acces and refresh token
    //send access and refresh token back


}