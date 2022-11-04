import { Express,Request,Response } from "express";
import { createUserHandler } from "../controller/user.controller";
import { createUserSchema } from "../schema/user.schema";
import validate from "../middleware/validateRequest";

export default function(app:Express){

    app.get('/',(req:Request,res:Response)=>{
        res.sendStatus(200)
    })
    app.post('/posted',(req:Request,res:Response)=>{
      console.log(req.body);
      res.send("Good here")
    })
    app.post('/api/users',validate(createUserSchema),createUserHandler);
    app.post('/api/sessions',validate(createUserSchema),createUserHandler);




}