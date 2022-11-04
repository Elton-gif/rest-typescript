import configs from "../default/configs";
import { UserDocument } from "../models/user.model";
import Session,{SessionDocument} from "../models/session.model";

export async function createSession(userid:string,userAgent:string){
    const session = await Session.create({user:userid,userAgent});

    return session.toJSON()
}


// create an acces token

export function createAccesToken({
    user,
    session,
}:{
    user:
    |

}){
    // Build and retun the new access token
    const accesToken = sign(
        {...user,session:session._id},
        {expiresIn:configs.sessionout}
    );
    return accesToken
}