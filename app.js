import urlRouter from "./routes/url.route.js"
import express from "express"
import redirectingurl from "./controllers/redirecturl.controller.js";;
import analyticsurl from"./routes/analytic.route.js"
//import bodyParser from 'body-parser';

const app=express();
//app.use(bodyParser.json());
app.use(express.json())

app.use("/api/v1/geturl",urlRouter)
app.get("/:shortid",redirectingurl)
app.use("/analytics",analyticsurl)
export {app}