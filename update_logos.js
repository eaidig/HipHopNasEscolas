const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// The blocks to inject (HTML)
const newHtmlLogos = `
<!-- Mobile Logos -->
<div class="mt-8 mb-4 w-full flex xl:hidden flex-wrap items-center justify-center gap-6">
  <img src="https://hiphopnasescolas.com.br/imagens/projeto-hiphop-nas-escolas.png" alt="Hip Hop nas Escolas" class="w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl" loading="lazy" />
  <img src="https://hiphopnasescolas.com.br/imagens/mano-ordai-arte-libertaria.png" alt="Arte Libertária" class="w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl" loading="lazy" />
  <img src="https://hiphopnasescolas.com.br/imagens/logo-pampa-crew-ponto-de-cultura-urbana.png" alt="Pampa Crew" class="w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl" loading="lazy" />
  <img src="https://hiphopnasescolas.com.br/imagens/logo-black-force-streetwear.png" alt="Black Force Streetwear" class="w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl" loading="lazy" />
</div>

<!-- Desktop Left Logos -->
<div class="hidden xl:flex absolute left-4 2xl:left-12 top-1/2 -translate-y-1/2 flex-col gap-12 z-20 pointer-events-none">
  <img src="https://hiphopnasescolas.com.br/imagens/projeto-hiphop-nas-escolas.png" alt="Hip Hop nas Escolas" class="w-48 2xl:w-64 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto" loading="lazy" />
  <img src="https://hiphopnasescolas.com.br/imagens/mano-ordai-arte-libertaria.png" alt="Arte Libertária" class="w-48 2xl:w-64 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto" loading="lazy" />
</div>

<!-- Desktop Right Logos -->
<div class="hidden xl:flex absolute right-4 2xl:right-12 top-1/2 -translate-y-1/2 flex-col gap-12 z-20 pointer-events-none">
  <img src="https://hiphopnasescolas.com.br/imagens/logo-pampa-crew-ponto-de-cultura-urbana.png" alt="Pampa Crew" class="w-48 2xl:w-64 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto" loading="lazy" />
  <img src="https://hiphopnasescolas.com.br/imagens/logo-black-force-streetwear.png" alt="Black Force Streetwear" class="w-48 2xl:w-64 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto" loading="lazy" />
</div>
`.replace(/\n/g, '');

const newJsxLogos = `
r.jsxDEV("div", {
  className: "mt-8 mb-4 w-full flex xl:hidden flex-wrap items-center justify-center gap-6",
  children: [
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/projeto-hiphop-nas-escolas.png", alt: "Hip Hop nas Escolas", className: "w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl", loading: "lazy" }, void 0, !1, {}, void 0),
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/mano-ordai-arte-libertaria.png", alt: "Arte Libertária", className: "w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl", loading: "lazy" }, void 0, !1, {}, void 0),
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/logo-pampa-crew-ponto-de-cultura-urbana.png", alt: "Pampa Crew", className: "w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl", loading: "lazy" }, void 0, !1, {}, void 0),
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/logo-black-force-streetwear.png", alt: "Black Force Streetwear", className: "w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl", loading: "lazy" }, void 0, !1, {}, void 0)
  ]
}, void 0, !0, {}, void 0),
r.jsxDEV("div", {
  className: "hidden xl:flex absolute left-4 2xl:left-12 top-1/2 -translate-y-1/2 flex-col gap-12 z-20 pointer-events-none",
  children: [
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/projeto-hiphop-nas-escolas.png", alt: "Hip Hop nas Escolas", className: "w-48 2xl:w-64 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto", loading: "lazy" }, void 0, !1, {}, void 0),
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/mano-ordai-arte-libertaria.png", alt: "Arte Libertária", className: "w-48 2xl:w-64 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto", loading: "lazy" }, void 0, !1, {}, void 0)
  ]
}, void 0, !0, {}, void 0),
r.jsxDEV("div", {
  className: "hidden xl:flex absolute right-4 2xl:right-12 top-1/2 -translate-y-1/2 flex-col gap-12 z-20 pointer-events-none",
  children: [
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/logo-pampa-crew-ponto-de-cultura-urbana.png", alt: "Pampa Crew", className: "w-48 2xl:w-64 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto", loading: "lazy" }, void 0, !1, {}, void 0),
    r.jsxDEV("img", { src: "https://hiphopnasescolas.com.br/imagens/logo-black-force-streetwear.png", alt: "Black Force Streetwear", className: "w-48 2xl:w-64 object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl pointer-events-auto", loading: "lazy" }, void 0, !1, {}, void 0)
  ]
}, void 0, !0, {}, void 0),
`.replace(/\n/g, '');

const oldHtmlRegex = /<div class=\"mt-12 mb-4 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10\">[\s\S]*?<\/div>(?=<div class=\"mt-4 flex flex-wrap items-center justify-center gap-3\.5\">)/;
html = html.replace(oldHtmlRegex, newHtmlLogos);

const oldJsxRegex = /r\.jsxDEV\(\"div\", {\s*className: \"mt-12 mb-4 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10\"[\s\S]*?\}, void 0, !0, \{\}, void 0\),(?=r\.jsxDEV\(\"div\",\{className:\"mt-4 flex flex-wrap items-center justify-center gap-3\.5\")/
html = html.replace(oldJsxRegex, newJsxLogos);

fs.writeFileSync('index.html', html);
console.log('Update complete');
