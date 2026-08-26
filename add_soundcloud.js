const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('index.html', 'utf-8');
const $ = cheerio.load(html);

const discografia = $('#discografia');
if (discografia.length > 0) {
  const container = discografia.find('.max-w-7xl');
  const headerBlock = container.find('.text-center.max-w-3xl.mx-auto.mb-14');
  
  const soundcloudIframe = `
    <div class="mb-14 w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
      <iframe 
        width="100%" 
        height="300" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rappampacrew&color=%23111111&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
      </iframe>
    </div>
  `;
  
  headerBlock.after(soundcloudIframe);
  
  fs.writeFileSync('index.html', $.html());
  console.log("Soundcloud embed added successfully.");
} else {
  console.log("Could not find discografia section.");
}
