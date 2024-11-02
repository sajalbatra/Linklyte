import { URL } from "../models/url.model.js";

const redirectingurl = async (req, res) => {
    const shortId = req.params.shortid;
    try {
        const urlDoc = await URL.findOneAndUpdate(
            { shortID: shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true }
        );
        
        if (urlDoc && urlDoc.redirectURL) {
            const redirectUrl = urlDoc.redirectURL.startsWith("http")
                ? urlDoc.redirectURL
                : `https://${urlDoc.redirectURL}`;

            res.redirect(redirectUrl);
        } else {
            console.log("Document not found or redirectURL is missing");
            res.status(404).send("Not Found");
        }
    } catch (error) {
        console.error("Error while redirecting:", error);
        res.status(500).send("Internal Server Error");
    }
};

export default redirectingurl;
