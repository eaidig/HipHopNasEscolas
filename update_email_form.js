const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// 1. Replace the fake onSubmit handler with a real mailto construction
const oldHandler = "Ee=de=>{de.preventDefault(),B(!0),setTimeout(()=>{B(!1),T(!0)},800)}";
const newHandler = "Ee=de=>{de.preventDefault();const body=encodeURIComponent(`Modalidade: ${z.eventType}\\nNome: ${z.name}\\nInstituição: ${z.institution}\\nE-mail: ${z.email}\\nTelefone: ${z.phone}\\nCidade: ${z.city}\\nData: ${z.date}\\nMensagem: ${z.message}`);window.location.href=`mailto:lucianoadronico@gmail.com?subject=Proposta de Agendamento&body=${body}`;B(!0);setTimeout(()=>{B(!1),T(!0)},800)}";
html = html.replace(oldHandler, newHandler);

// 2. We already replaced manoordai.contato@gmail.com to lucianoadronico@gmail.com using sed earlier, 
//    but just in case let's verify.
html = html.replace(/manoordai\.contato\@gmail\.com/g, "lucianoadronico@gmail.com");

fs.writeFileSync('index.html', html);
console.log("Email form updated!");
