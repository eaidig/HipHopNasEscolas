const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// 1. Hero replacement
const oldHero = 'id:"btn-hero-listen-spotify",className:"px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-sans text-xs md:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center gap-2 transform hover:-translate-y-0.5",children:[r.jsxDEV(Qs,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/src/components/HeroSection.tsx",lineNumber:62,columnNumber:13},void 0),r.jsxDEV("span",{children:"Ouvir EP no Spotify"},void 0,!1,{fileName:"/app/applet/src/components/HeroSection.tsx",lineNumber:63,columnNumber:13},void 0),r.jsxDEV(Gi,{className:"w-3.5 h-3.5 opacity-80"},void 0,!1,{fileName:"/app/applet/src/components/HeroSection.tsx",lineNumber:64,columnNumber:13},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/HeroSection.tsx",lineNumber:55,columnNumber:11},void 0)';

const soundCloudHero = ',r.jsxDEV("a",{href:"https://soundcloud.com/rappampacrew?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",target:"_blank",rel:"noopener noreferrer",id:"btn-hero-listen-soundcloud",className:"px-6 py-3 bg-[#ff5500] hover:bg-[#ff7700] text-white font-sans text-xs md:text-sm font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 flex items-center gap-2 transform hover:-translate-y-0.5",children:[r.jsxDEV(Qs,{className:"w-4 h-4"},void 0,!1,{},void 0),r.jsxDEV("span",{children:"Ouvir no SoundCloud"},void 0,!1,{},void 0),r.jsxDEV(Gi,{className:"w-3.5 h-3.5 opacity-80"},void 0,!1,{},void 0)]},void 0,!0,{},void 0)';

if(html.includes(oldHero)) {
    html = html.replace(oldHero, oldHero + soundCloudHero);
    console.log('Hero replaced successfully');
} else {
    console.log('Hero not found!');
}

// 2. Disco replacement
const oldDisco = 'children:r.jsxDEV("a",{href:gn.spotifyAlbumUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md",children:[r.jsxDEV(Qs,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:120,columnNumber:19},void 0),r.jsxDEV("span",{children:"Seguir Mano Ordai no Spotify"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:121,columnNumber:19},void 0),r.jsxDEV(Gi,{className:"w-3.5 h-3.5 opacity-80"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:122,columnNumber:19},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:114,columnNumber:17},void 0)';

const newDisco = 'className:"pt-2 flex flex-wrap gap-2",children:[r.jsxDEV("a",{href:gn.spotifyAlbumUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md",children:[r.jsxDEV(Qs,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:120,columnNumber:19},void 0),r.jsxDEV("span",{children:"Seguir Mano Ordai no Spotify"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:121,columnNumber:19},void 0),r.jsxDEV(Gi,{className:"w-3.5 h-3.5 opacity-80"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:122,columnNumber:19},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:114,columnNumber:17},void 0),r.jsxDEV("a",{href:"https://soundcloud.com/rappampacrew?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff5500] hover:bg-[#ff7700] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md",children:[r.jsxDEV(Qs,{className:"w-4 h-4"},void 0,!1,{},void 0),r.jsxDEV("span",{children:"No SoundCloud"},void 0,!1,{},void 0),r.jsxDEV(Gi,{className:"w-3.5 h-3.5 opacity-80"},void 0,!1,{},void 0)]},void 0,!0,{},void 0)]';

if(html.includes(oldDisco)) {
    // We also need to change the parent div class so they lay out nicely if needed.
    // The parent is `className:"pt-2",children:r.jsxDEV(`
    const parentOldDisco = 'className:"pt-2",children:r.jsxDEV("a",{href:gn.spotifyAlbumUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md",children:[r.jsxDEV(Qs,{className:"w-4 h-4"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:120,columnNumber:19},void 0),r.jsxDEV("span",{children:"Seguir Mano Ordai no Spotify"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:121,columnNumber:19},void 0),r.jsxDEV(Gi,{className:"w-3.5 h-3.5 opacity-80"},void 0,!1,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:122,columnNumber:19},void 0)]},void 0,!0,{fileName:"/app/applet/src/components/DiscographySection.tsx",lineNumber:114,columnNumber:17},void 0)';

    if (html.includes(parentOldDisco)) {
        html = html.replace(parentOldDisco, newDisco);
        console.log('Disco replaced successfully');
    } else {
        console.log('Disco parent not found!');
    }
} else {
    console.log('Disco not found!');
}

fs.writeFileSync('index.html', html);
