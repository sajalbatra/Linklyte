import { URL } from "../models/url.model.js";

async function analytics(req, res) {
    console.log("helllo")
    let userUrl = req.query.url;

    // Log the original URL
    console.log("Original URL:", userUrl);
    
    // Clean the URL by removing surrounding quotes if present
    userUrl = userUrl ? userUrl.replace(/"/g, '') : null;

    if (!userUrl) {
        return res.status(400).json({ message: "Invalid URL" });
    }

    // Extract shortID from the userUrl
    const shortID = userUrl.split("/").pop(); // Assuming the short ID is the last part of the URL

    try {
        const track = await URL.findOne({ shortID });
        console.log(track);
        
        if (track) {
            const visitors = track.visitHistory.length;
            return res.json({ message: "The number of visitors is", visit: visitors });
        } else {
            return res.status(404).json({ message: "URL not found" });
        }
    } catch (error) {
        console.error("Error in analytics:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default analytics;
