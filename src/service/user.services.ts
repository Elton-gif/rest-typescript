import { DocumentDefinition } from "mongoose";
import User,{UserDocument} from "../models/user.model";

export async function createUser(input:DocumentDefinition<UserDocument>){
    try {
        return await User.create(input);
    } catch (error:any) {
        throw new Error(error)
    }
}

function findUser(){
    createUser

}

export async function validatePassword({
    email,
    password
}:{
    email:UserDocument['email']
    password:string;
}){
    const user = await User.findOne({email});

    if (!user) {
        return false;
    }

    const isValid = await user.comparePassword(password);

    if(!isValid)
    {
        return false;
    }
    return user;
}