import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/route";
const app = express();
const PORT = 3000;

//mongoose connection
mongoose.connect("mongodb://localhost/abet",{ useNewUrlParser: true }); //database connect

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //allows for use of routes created earlier

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));

