import mongoose from "mongoose";
const  bcrypt = require('bcrypt');
import configs from "../default/configs";


export interface UserDocument extends mongoose.Document{
    email:string,
    name:string,
    password:string,
    createdAt:Date,
    updatedAt:Date,
    comparePassword(candidatePassword:string):Promise<boolean>
}


const UserSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    password:{type:String,required:true}
},
{
    timestamps:true
});

UserSchema.pre('save',async function(next:any){
    let user = this as UserDocument;

    // has the password only if its new or modified
    if (!user.isModified('password')) {
        return next();

        // random additional data

        const salt = await bcrypt.genSalt(configs.salt);

        const hash = await bcrypt.hashSync(user.password,salt);

        // replace the password with th hash

        user.password = hash;

        return next();
    }
})






UserSchema.methods.comparePassword = async function(
    candidatePassword:string,
){
    const user = this as UserDocument;
    return bcrypt.compare(candidatePassword,user.password).catch((e:any)=>false);

}

const User = mongoose.model<UserDocument>('User ',UserSchema);

export default User;