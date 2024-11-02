import { nanoid } from 'nanoid';
import { URL } from '../models/url.model.js';
import { weburl } from '../utils/constant.js';
const generateNewShortUrl = async (req, res) => {
    const { url } = req.body;
    try {
        if (!url || typeof url !== 'string') {
            return res.status(400).json({ message: "Invalid URL" });
        }

        const existingUrl = await URL.findOne({ redirectURL: url });
        if (existingUrl) {
            return res.status(201).json({ message: "URL already exists", id: weburl+existingUrl.shortID });
        } else {
            const shortId = nanoid(10);
            await URL.create({
                shortID: shortId,
                redirectURL: url,
                visitHistory: []
            });
            return res.status(201).json({ message: "Short URL created", id: weburl+shortId });
        }
    } catch (error) {
        console.error("Error generating short URL:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default generateNewShortUrl;
