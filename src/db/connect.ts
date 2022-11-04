import mongoose from "mongoose";
import _default from "../default/configs";

const dburl = _default.dbUrl;

const connect  = async()=>{
    try {
        const connect = await mongoose.connect(dburl)
        console.log('mongo db connected');

    } catch (error:any) {
        console.log(error.message)
    }
}

export default connect;