const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('index.html', 'utf-8');
const $ = cheerio.load(html);

let musicSection = null;
$('h2').each((i, el) => {
  const text = $(el).text().toUpperCase();
  if (text.includes('EP') || text.includes('MÚSICA') || text.includes('DISCOGRAFIA')) {
    musicSection = $(el).closest('section');
    console.log('Found section:', text);
  }
});

if (musicSection) {
  console.log("Section ID:", musicSection.attr('id'));
  // print first 500 chars of inner content
  console.log(musicSection.html().substring(0, 1000));
} else {
  console.log('Music section not found');
}
