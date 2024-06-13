import dotenv from "dotenv";
dotenv.config();
import express from "express"
import bodyParser from "body-parser";
import router from "./routes/apiRouter.js"

const app = express();
//middleware
app.use(cors());
app.use(bodyParser.json());

//endpoint
app.use('/', router)

//server 3000
const port = 3400
app.listen(port, () => {
  console.log("server running cuy")
})