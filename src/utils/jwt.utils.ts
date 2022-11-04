import { sign } from "crypto";
import { Jwt } from "jsonwebtoken";
import { object } from "yup";
import configs from "../default/configs";


const privateKey = configs.privateKey;

export functions sign(object:Object,options?:Jwt.signOptions | undefined){
    return jwt.sign(object,privateKey,options)
}