var express = require("express");
import configs from './default/configs';
import mongoose from 'mongoose';
import connect from './db/connect';
import routes from './routes/routes';


const port = configs.port as number;
const host = configs.host as string;
//connect the database


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))



app.listen(port,host,()=>{
    connect();
    routes(app)
    console.log('On server ',port)
})