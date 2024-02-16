import { nanoid } from 'nanoid';
import { URL } from '../models/url.model.js';

async function generatenewshorturl(req, res) {
    const { url } = req.body;

    try {
        // Validate the URL
        if (!url || typeof url !== 'string') {
            return res.status(400).json({ message: "Invalid URL" });
        }

        // Generate a new short ID
        const shortId = nanoid(10);

        // Save the URL to the database
        await URL.create({
            shortID: shortId,
            redirectURL: url,
            visitHistory: []
        });

        // Return the short ID
        return res.status(201).json({ message: "Short URL created", id: shortId });
    } catch (error) {
        console.error("Error generating short URL:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export { generatenewshorturl };
