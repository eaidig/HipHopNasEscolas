const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const bookReactCode = `const BooksComponent = () => r.jsxDEV("section", {
  id: "livros",
  className: "relative py-20 sm:py-24 border-b border-zinc-800/80 bg-[#0c0d12]",
  children: r.jsxDEV("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    children: [
      r.jsxDEV("div", {
        className: "text-center max-w-3xl mx-auto mb-14",
        children: [
          r.jsxDEV("div", {
            className: "inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[11px] font-sans tracking-wide text-zinc-400 font-semibold mb-3",
            children: [
              r.jsxDEV("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-book-open w-3.5 h-3.5 text-zinc-300",
                "aria-hidden": "true",
                children: [
                  r.jsxDEV("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }, void 0, !1, {}, void 0),
                  r.jsxDEV("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }, void 0, !1, {}, void 0)
                ]
              }, void 0, !0, {}, void 0),
              r.jsxDEV("span", { children: "OBRAS LITERÁRIAS" }, void 0, !1, {}, void 0)
            ]
          }, void 0, !0, {}, void 0),
          r.jsxDEV("h2", {
            className: "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white",
            children: "Livros & E-books"
          }, void 0, !1, {}, void 0),
          r.jsxDEV("p", {
            className: "mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed",
            children: "Faça o download gratuito das obras de Mano Ordai, explorando a cultura Hip Hop e vivências da fronteira."
          }, void 0, !1, {}, void 0)
        ]
      }, void 0, !0, {}, void 0),
      r.jsxDEV("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto",
        children: [
          r.jsxDEV("div", {
            className: "group bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 flex flex-col md:flex-row gap-6 items-center md:items-start transition-all hover:bg-zinc-900 hover:border-zinc-700 shadow-lg",
            children: [
              r.jsxDEV("div", {
                className: "shrink-0 w-48 sm:w-56 md:w-40 lg:w-48 rounded-xl overflow-hidden shadow-2xl relative",
                children: r.jsxDEV("img", {
                  src: "https://hiphopnasescolas.com.br/imagens/capa-do-livro-sobrevivente-da-fronteira-mano-ordai.png",
                  alt: "Capa do Livro Sobrevivente da Fronteira",
                  className: "w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500",
                  loading: "lazy"
                }, void 0, !1, {}, void 0)
              }, void 0, !1, {}, void 0),
              r.jsxDEV("div", {
                className: "flex-1 flex flex-col justify-center h-full text-center md:text-left",
                children: [
                  r.jsxDEV("h3", {
                    className: "text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2",
                    children: "Sobrevivente da Fronteira"
                  }, void 0, !1, {}, void 0),
                  r.jsxDEV("p", {
                    className: "text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6",
                    children: "Uma narrativa visceral sobre a resistência e vivência na fronteira do sul do país."
                  }, void 0, !1, {}, void 0),
                  r.jsxDEV("div", {
                    className: "mt-auto pt-4 border-t border-zinc-800",
                    children: r.jsxDEV("a", {
                      href: "https://hiphopnasescolas.com.br/imagens/livro-sobrevivente-da-fronteira-mano-ordai.pdf",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md",
                      children: [
                        r.jsxDEV("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-download w-4 h-4",
                          children: [
                            r.jsxDEV("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, void 0, !1, {}, void 0),
                            r.jsxDEV("polyline", { points: "7 10 12 15 17 10" }, void 0, !1, {}, void 0),
                            r.jsxDEV("line", { x1: 12, x2: 12, y1: 15, y2: 3 }, void 0, !1, {}, void 0)
                          ]
                        }, void 0, !0, {}, void 0),
                        r.jsxDEV("span", { children: "Baixar PDF Grátis" }, void 0, !1, {}, void 0)
                      ]
                    }, void 0, !0, {}, void 0)
                  }, void 0, !1, {}, void 0)
                ]
              }, void 0, !0, {}, void 0)
            ]
          }, void 0, !0, {}, void 0),
          r.jsxDEV("div", {
            className: "group bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 flex flex-col md:flex-row gap-6 items-center md:items-start transition-all hover:bg-zinc-900 hover:border-zinc-700 shadow-lg",
            children: [
              r.jsxDEV("div", {
                className: "shrink-0 w-48 sm:w-56 md:w-40 lg:w-48 rounded-xl overflow-hidden shadow-2xl relative",
                children: r.jsxDEV("img", {
                  src: "https://hiphopnasescolas.com.br/imagens/capa-livro-guerra-ao-sistema-batalha-ou-guerra-quem-sobrevive.png",
                  alt: "Capa do Livro Guerra ao Sistema",
                  className: "w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500",
                  loading: "lazy"
                }, void 0, !1, {}, void 0)
              }, void 0, !1, {}, void 0),
              r.jsxDEV("div", {
                className: "flex-1 flex flex-col justify-center h-full text-center md:text-left",
                children: [
                  r.jsxDEV("h3", {
                    className: "text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2",
                    children: "Guerra ao Sistema"
                  }, void 0, !1, {}, void 0),
                  r.jsxDEV("h4", {
                    className: "text-xs sm:text-sm font-semibold tracking-wide text-zinc-300 uppercase mb-2",
                    children: "Batalha ou Guerra, Quem Sobrevive"
                  }, void 0, !1, {}, void 0),
                  r.jsxDEV("p", {
                    className: "text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6",
                    children: "A essência do movimento, lutas sociais e o impacto do sistema na juventude periférica."
                  }, void 0, !1, {}, void 0),
                  r.jsxDEV("div", {
                    className: "mt-auto pt-4 border-t border-zinc-800",
                    children: r.jsxDEV("a", {
                      href: "https://hiphopnasescolas.com.br/imagens/livro-guerra-ao-sistema-batalha-ou-guerra-quem-sobrevive.pdf",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md",
                      children: [
                        r.jsxDEV("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-download w-4 h-4",
                          children: [
                            r.jsxDEV("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, void 0, !1, {}, void 0),
                            r.jsxDEV("polyline", { points: "7 10 12 15 17 10" }, void 0, !1, {}, void 0),
                            r.jsxDEV("line", { x1: 12, x2: 12, y1: 15, y2: 3 }, void 0, !1, {}, void 0)
                          ]
                        }, void 0, !0, {}, void 0),
                        r.jsxDEV("span", { children: "Baixar PDF Grátis" }, void 0, !1, {}, void 0)
                      ]
                    }, void 0, !0, {}, void 0)
                  }, void 0, !1, {}, void 0)
                ]
              }, void 0, !0, {}, void 0)
            ]
          }, void 0, !0, {}, void 0)
        ]
      }, void 0, !0, {}, void 0)
    ]
  }, void 0, !0, {}, void 0)
}, void 0, !0, {}, void 0);

`;

// 1. Find a place to define BooksComponent
// We can define it right before HD=()=>...
const componentDefIndex = html.indexOf('HD=()=>r.jsxDEV("section",{id:"hero"');
html = html.substring(0, componentDefIndex) + bookReactCode + "\n" + html.substring(componentDefIndex);

// 2. Inject into the App render list. Let's find r.jsxDEV(qD and put r.jsxDEV(BooksComponent right after it
const discografiaCall = 'r.jsxDEV(qD,{onOpenLyrics:de},void 0,!1,{fileName:"/app/applet/src/App.tsx",lineNumber:63,columnNumber:9},this),';
const newCall = 'r.jsxDEV(BooksComponent,{},void 0,!1,{},this),';

html = html.replace(discografiaCall, discografiaCall + newCall);

fs.writeFileSync('index.html', html);
console.log('Done modifying React layer');
