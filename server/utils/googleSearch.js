var google = require("google");
var cheerio = require("cheerio");

//parses the google results and extracts the lyrics if found
//check this element for lyrics :
// div.hwc div[class='BNeawe tAd8D AP7Wnd'] div div[class='BNeawe tAd8D AP7Wnd']

const parseGoogleForLyrics = (body) => {
    const $ = cheerio.load(body);
    const lyrics = $(
        "div.hwc div[class='BNeawe tAd8D AP7Wnd'] div div[class='BNeawe tAd8D AP7Wnd']"
    ).text();
    return lyrics;
};

const parseGoogleForLink = (body) => {
    const $ = cheerio.load(body);
    var externalGeniusAnchorTags = $("a[href*=genius.com]");
    var externalGeniusLinks = [];
    
    for (let i = 0; i < externalGeniusAnchorTags.length; i++){
        externalGeniusLinks.push(externalGeniusAnchorTags[i].attribs.href);
    }

    externalGeniusLinks = externalGeniusLinks.map((link) => {
        link = link.replace("/url?q=", "");
        link = link.replace(/&(.*)/, "");
        return link;
    })

    return externalGeniusLinks;  
    
};

module.exports = { parseGoogleForLyrics, parseGoogleForLink };
