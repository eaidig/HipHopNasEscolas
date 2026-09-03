const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const jsxFind = 'r.jsxDEV("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-3.5",children:[r.jsxDEV("a",{href:gn.spotifyAlbumUrl,target:"_blank",rel:"noopener noreferrer",id:"btn-hero-listen-spotify"';
const htmlFind = '<div class="mt-8 flex flex-wrap items-center justify-center gap-3.5"><a href="https://open.spotify.com/intl-pt/album/0FQt3RJ1XyD3QqQE0X1ztw?si=hI6GzGVhQtyPsB1kBN6pJA" target="_blank" rel="noopener noreferrer" id="btn-hero-listen-spotify"';

const jsxLogos = `r.jsxDEV("div", {
  className: "mt-12 mb-4 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10",
  children: [
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/logo-black-force-streetwear.png", alt: "Black Force Streetwear", className: "h-10 sm:h-14 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md", loading: "lazy" }, void 0, !1, {}, void 0),
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/logo-pampa-crew-ponto-de-cultura-urbana.png", alt: "Pampa Crew", className: "h-10 sm:h-14 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md", loading: "lazy" }, void 0, !1, {}, void 0),
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/mano-ordai-arte-libertaria.png", alt: "Arte Libertária", className: "h-10 sm:h-14 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md", loading: "lazy" }, void 0, !1, {}, void 0),
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/projeto-hiphop-nas-escolas.png", alt: "Hip Hop nas Escolas", className: "h-10 sm:h-14 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md", loading: "lazy" }, void 0, !1, {}, void 0)
  ]
}, void 0, !0, {}, void 0),`;

const htmlLogos = `<div class="mt-12 mb-4 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10">
  <img src="https://hiphopnasescolas.com.br/imagens/logo-black-force-streetwear.png" alt="Black Force Streetwear" class="h-10 sm:h-14 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md" loading="lazy" />
  <img src="https://hiphopnasescolas.com.br/imagens/logo-pampa-crew-ponto-de-cultura-urbana.png" alt="Pampa Crew" class="h-10 sm:h-14 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md" loading="lazy" />
  <img src="https://hiphopnasescolas.com.br/imagens/mano-ordai-arte-libertaria.png" alt="Arte Libertária" class="h-10 sm:h-14 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md" loading="lazy" />
  <img src="https://hiphopnasescolas.com.br/imagens/projeto-hiphop-nas-escolas.png" alt="Hip Hop nas Escolas" class="h-10 sm:h-14 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md" loading="lazy" />
</div>`;

// replace JSX
if (html.includes(jsxFind)) {
    html = html.replace(jsxFind, jsxLogos + jsxFind.replace('mt-8', 'mt-4'));
    console.log('Replaced JSX');
} else {
    console.log('Could not find JSX');
}

// replace HTML
if (html.includes(htmlFind)) {
    html = html.replace(htmlFind, htmlLogos + htmlFind.replace('mt-8', 'mt-4'));
    console.log('Replaced HTML');
} else {
    console.log('Could not find HTML');
}

fs.writeFileSync('index.html', html);
