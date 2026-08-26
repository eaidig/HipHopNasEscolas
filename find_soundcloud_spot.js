const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');

const spotifyMatches = html.match(/.{0,150}Ouvir EP no Spotify.{0,150}/g);
if (spotifyMatches) {
    console.log("Found matches for 'Ouvir EP no Spotify':");
    console.log(spotifyMatches.join('\n'));
}

const spotifyMatches2 = html.match(/.{0,150}Seguir Mano Ordai no Spotify.{0,150}/g);
if (spotifyMatches2) {
    console.log("Found matches for 'Seguir Mano Ordai no Spotify':");
    console.log(spotifyMatches2.join('\n'));
}

