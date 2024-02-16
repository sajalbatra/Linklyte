import { URL } from "../models/url.model.js";

async function analytics(req, res) {
    const shortID = req.params.shortid;

    try {
        const track = await URL.findOne({ shortID});
        console.log(track)
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
