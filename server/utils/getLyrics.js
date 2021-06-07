const google = require("google");
const cheerio = require("cheerio");
const fs = require("fs");

const { parseGoogleForLyrics, parseGoogleForLink } = require(__dirname + "/googleSearch");
const getLyricsFromGeniusLink = require(__dirname + "/geniusSearch");

const handleLyricsExample = (lyrics) => {
    //this function will take the lyrics in arguments and handle that accordingly to our needs
    console.log(lyrics);
};


const getLyrics = (songName, songMainArtist, handleLyrics) => {
    google.resultsPerPage = 10;
    google(`${songName} ${songMainArtist} lyrics`, (err, { body }) => {
    
        //parse body for lyrics
        const googleLyrics = parseGoogleForLyrics(body);
    
        if (googleLyrics) {
            //lyrics found on google
            handleLyrics(googleLyrics);
        } else {
            //extract genius links from google search results
            const geniusLinks = parseGoogleForLink(body);
    
            getLyricsFromGeniusLink(geniusLinks[0]).then(handleLyrics);
        }
    });
};



module.exports = getLyrics;

