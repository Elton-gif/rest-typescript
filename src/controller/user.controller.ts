import { Request,Response } from "express";
import { createUser } from "../service/user.services";

export async function createUserHandler(req:Request,res:Response){

    try {
        const user = await createUser(req.body);
        return res.send(user)
    } catch (error:any) {
        console.log(error.message)
       return  res.status(409).send(error.message);
    //    duplicate error
    }

}

export async function createUserSessionHandler(req:Request,res:Response){
    // validate email isregistred
    //create a session,refresh tokens,acces token
    

}