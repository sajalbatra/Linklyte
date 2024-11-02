import express from "express";
import urlRouter from "./controllers/url.controller.js";  // Import the URL router for handling URL shortening
import redirectingurl from "./controllers/redirecturl.controller.js"; // Import the redirecting URL controller
import analyticsurl from "./controllers/analytics.controller.js"; // Import the analytics controller

const app = express();


app.get("/",(req,res)=>{
    res.send("hello world")
})
// Middleware to parse JSON bodies
app.use(express.json());

// Route for creating a new short URL
app.post("/url", urlRouter);

// Route for analytics to get visit counts for a short URL
app.get("/analytics", analyticsurl);

// Route for redirecting to the original URL based on short ID
app.get("/:shortid", redirectingurl);



// Export the app instance
export { app };
