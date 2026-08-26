const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Replace using the exact string that was found previously
const oldCode = 'const de=encodeURIComponent(`Olá Mano Ordai! Gostaria de agendar uma proposta para ${z.eventType==="palestra-escola"?"Palestra do Projeto Hip Hop nas Escolas":z.eventType==="show"?"Show Musical / EP Sobrevivendo":z.eventType==="oficina"?"Oficina de Rima & Cultura Urbana":z.eventType==="capacitacao-docente"?"Capacitação Docente em Relações Étnico-Raciais (ERER)":"Projeto Cultural / Ponto de Cultura"}. Meu nome é ${z.name||"Contratante"} de ${z.city||"minha cidade"}.`);return`https://api.whatsapp.com';
const newCode = 'const de=encodeURIComponent("Olá Mano Ordai! Vim através do teu site, gostaria de conversar contigo.");return`https://api.whatsapp.com';

if(html.includes(oldCode)) {
  html = html.replace(oldCode, newCode);
  fs.writeFileSync('index.html', html);
  console.log("Replaced dynamic code successfully.");
} else {
  console.log("Could not find the exact string.");
}
