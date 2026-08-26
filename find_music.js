const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf-8');

const spotifyHero = html.match(/.{0,200}btn-hero-listen-spotify.{0,200}/g);
if (spotifyHero) {
    console.log("Hero Spotify:");
    console.log(spotifyHero[0]);
}

const spotifyDisco = html.match(/.{0,200}Seguir Mano Ordai no Spotify.{0,200}/g);
if (spotifyDisco) {
    console.log("Disco Spotify:");
    console.log(spotifyDisco[0]);
}
