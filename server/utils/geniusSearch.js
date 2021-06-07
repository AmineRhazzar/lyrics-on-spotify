const axios = require("axios");
const cheerio = require("cheerio");


const getLyricsFromGeniusLink = (url) => {
    return axios.get(url)
        .then(res => res.data)
        .then(body => {
            const $ = cheerio.load(body);
            const lyricsContainer = $("div.Lyrics__Root-sc-1ynbvzw-0");
            const children = lyricsContainer.contents();
            var geniusLyrics = ""
            for (let i = 0; i < children.length; i++){
                currNode = children[i + ""];
                currNode?.children?.forEach((child) => {
                    if (child.type === "text") {
                        geniusLyrics += child.data + "\n";
                    } else if (child.name === "a") {
                        child.children.forEach((anchorChild) => {
                            anchorChild.children.forEach((grandChild) => {
                                if (grandChild.type === "text") {
                                    geniusLyrics += grandChild.data + "\n";
                                }
                            })
                        })
                    }
                });
            }
            return geniusLyrics;
        })
        .catch(err =>{console.log(err)});
}

module.exports = getLyricsFromGeniusLink;


