import {app} from "./app.js"
import server from "./databases/db.js";
import 'dotenv/config'
const port=process.env.PORT || 3000;
import cors from "cors"
app.use(cors())

server()
    .then(() => {
        app.listen(port, () => {
            console.log(`app is listening at port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Error in starting server:", error);
    });