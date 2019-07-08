const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

const PORT = 5555;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const authorizeIframe = async (url) => {

    const response = await fetch(url);

    if (!response.ok) {
        throw new error(await response.text());
    }

    try {
        const option =  [...response.headers].filter(a => a[0] === "x-frame-options")[0][1]

        if( typeof option !== "undefined" &&  option !== "")  return false
     
    } catch (e) {
        return true;
    }

};


app.get('/', async (req, res, next) => {

    if (typeof req.query.url === "undefined") {
        return res.status(500).json({
            error: "the url param is missing"
        });
    }

    try {

        return res.status(200).json({
            canBeIframed: await authorizeIframe(req.query.url)
        });

    } catch (e) {

        return res.status(500).json({
            error: e,
            canBeIframed: false
        });
    }


});


module.exports = {
    app
};