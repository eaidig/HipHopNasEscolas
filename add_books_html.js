const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const bookHtmlCode = `<section id="livros" class="relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#0c0d12]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-14">
      <div class="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open w-3.5 h-3.5 text-zinc-300" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg><span>OBRAS LITERÁRIAS</span>
      </div>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">Livros &amp; E-books</h2>
      <p class="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
        Faça o download gratuito das obras de Mano Ordai, explorando a cultura Hip Hop e vivências da fronteira.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
      <div class="group bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 flex flex-col md:flex-row gap-6 items-center md:items-start transition-all hover:bg-zinc-900 hover:border-zinc-700 shadow-lg">
        <div class="shrink-0 w-48 sm:w-56 md:w-40 lg:w-48 rounded-xl overflow-hidden shadow-2xl relative">
          <img src="https://hiphopnasescolas.com.br/imagens/capa-do-livro-sobrevivente-da-fronteira-mano-ordai.png" alt="Capa do Livro Sobrevivente da Fronteira" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div class="flex-1 flex flex-col justify-center h-full text-center md:text-left">
          <h3 class="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">Sobrevivente da Fronteira</h3>
          <p class="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6">Uma narrativa visceral sobre a resistência e vivência na fronteira do sul do país.</p>
          <div class="mt-auto pt-4 border-t border-zinc-800">
            <a href="https://hiphopnasescolas.com.br/imagens/livro-sobrevivente-da-fronteira-mano-ordai.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              <span>Baixar PDF Grátis</span>
            </a>
          </div>
        </div>
      </div>

      <div class="group bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 flex flex-col md:flex-row gap-6 items-center md:items-start transition-all hover:bg-zinc-900 hover:border-zinc-700 shadow-lg">
        <div class="shrink-0 w-48 sm:w-56 md:w-40 lg:w-48 rounded-xl overflow-hidden shadow-2xl relative">
          <img src="https://hiphopnasescolas.com.br/imagens/capa-livro-guerra-ao-sistema-batalha-ou-guerra-quem-sobrevive.png" alt="Capa do Livro Guerra ao Sistema" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div class="flex-1 flex flex-col justify-center h-full text-center md:text-left">
          <h3 class="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2">Guerra ao Sistema</h3>
          <h4 class="text-xs sm:text-sm font-semibold tracking-wide text-zinc-300 uppercase mb-2">Batalha ou Guerra, Quem Sobrevive</h4>
          <p class="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6">A essência do movimento, lutas sociais e o impacto do sistema na juventude periférica.</p>
          <div class="mt-auto pt-4 border-t border-zinc-800">
            <a href="https://hiphopnasescolas.com.br/imagens/livro-guerra-ao-sistema-batalha-ou-guerra-quem-sobrevive.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              <span>Baixar PDF Grátis</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

// Insert the HTML block just before the credenciais section
const credenciaisStart = '<section id="credenciais"';
html = html.replace(credenciaisStart, bookHtmlCode + '\n' + credenciaisStart);

// Let's also add "Livros & E-books" to the Navigation Menu
// Both in static HTML and JS!
const navMenuStatic = `<li><a href="#discografia" class="hover:text-white transition-colors">EP Sobrevivendo &amp; Músicas</a></li>`;
const navMenuWithLivrosStatic = navMenuStatic + `<li><a href="#livros" class="hover:text-white transition-colors">Livros &amp; E-books</a></li>`;
html = html.replace(navMenuStatic, navMenuWithLivrosStatic);

const navMenuJs = `href:"#discografia",className:"hover:text-white transition-colors",children:"EP Sobrevivendo & M\\xFAsicas"},void 0,!1,{fileName:"/app/applet/src/components/Footer.tsx",lineNumber:41,columnNumber:17},void 0)},void 0,!1,{fileName:"/app/applet/src/components/Footer.tsx",lineNumber:40,columnNumber:15},void 0),`;
// In JS the string might be "EP Sobrevivendo & Músicas" depending on how minifier works, let's just replace with regex
const jsNavRegex = /(href:"#discografia",className:"hover:text-white transition-colors",children:"EP Sobrevivendo & M\\xFAsicas"},void 0,!1,\{fileName:"[^"]+",lineNumber:\d+,columnNumber:\d+\},void 0)\},void 0,!1,\{fileName:"[^"]+",lineNumber:\d+,columnNumber:\d+\},void 0),/;

// Let's check if the regex matches
if (jsNavRegex.test(html)) {
    console.log("Matched JS nav menu!");
    html = html.replace(jsNavRegex, (match) => {
        return match + `r.jsxDEV("li",{children:r.jsxDEV("a",{href:"#livros",className:"hover:text-white transition-colors",children:"Livros & E-books"},void 0,!1,{},void 0)},void 0,!1,{},void 0),`;
    });
} else {
    // maybe unicode character is literally 'ú'?
    const jsNavRegex2 = /(href:"#discografia",className:"hover:text-white transition-colors",children:"EP Sobrevivendo & Músicas"},void 0,!1,\{fileName:"[^"]+",lineNumber:\d+,columnNumber:\d+\},void 0)\},void 0,!1,\{fileName:"[^"]+",lineNumber:\d+,columnNumber:\d+\},void 0),/;
    if (jsNavRegex2.test(html)) {
        console.log("Matched JS nav menu (with literal ú)!");
        html = html.replace(jsNavRegex2, (match) => {
            return match + `r.jsxDEV("li",{children:r.jsxDEV("a",{href:"#livros",className:"hover:text-white transition-colors",children:"Livros & E-books"},void 0,!1,{},void 0)},void 0,!1,{},void 0),`;
        });
    } else {
        console.log("Did not match JS nav menu. We will try simple string search.");
    }
}

fs.writeFileSync('index.html', html);
console.log('Done modifying HTML layer');
