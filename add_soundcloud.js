const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// 1. Hero section SoundCloud button
const spotifyHeroPattern = /<a href="https:\/\/open\.spotify\.com\/intl-pt\/album\/0FQt3RJ1XyD3QqQE0X1ztw\?si=hI6GzGVhQtyPsB1kBN6pJA"[^>]*id="btn-hero-listen-spotify".*?<\/a>/;
const soundCloudHeroBtn = `<a href="https://soundcloud.com/rappampacrew?utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing" target="_blank" rel="noopener noreferrer" id="btn-hero-listen-soundcloud" class="px-5 py-3 bg-[#ff5500] hover:bg-[#ff7700] text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-md shadow-[#ff5500]/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones w-4 h-4" aria-hidden="true"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg><span>Ouvir no SoundCloud</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-3.5 h-3.5 opacity-70" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>`;

html = html.replace(spotifyHeroPattern, (match) => {
    return match + soundCloudHeroBtn;
});

// 2. Discography section SoundCloud button
const spotifyDiscoPattern = /<a href="https:\/\/open\.spotify\.com\/intl-pt\/album\/0FQt3RJ1XyD3QqQE0X1ztw\?si=hI6GzGVhQtyPsB1kBN6pJA"[^>]*class="inline-flex items-center gap-2 px-5 py-2\.5 bg-\[#1DB954\].*?<\/a>/;
const soundCloudDiscoBtn = `<a href="https://soundcloud.com/rappampacrew?utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff5500] hover:bg-[#ff7700] text-white font-sans font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md shadow-[#ff5500]/20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones w-4 h-4" aria-hidden="true"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg><span>Seguir no SoundCloud</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-3.5 h-3.5 opacity-70" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>`;

html = html.replace(spotifyDiscoPattern, (match) => {
    return match + soundCloudDiscoBtn;
});

// Since the whole App is a JSX string inside main.tsx, maybe it's rendered. But wait, I'm modifying the final static HTML output right? Let's make sure I'm doing the replacement on the React strings as well since the page builds from React? No, the user provided me a static HTML page that is served directly. Actually it's built from `index.html` where React code is inside `<script type="module">` probably.
// But the static `index.html` already has the HTML? Wait. The `index.html` has JSX embedded as strings for some reason. The transpiled code.

fs.writeFileSync('index.html', html);
console.log("SoundCloud buttons injected!");
