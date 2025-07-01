const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');

// Create a write stream for the output file
const writeStream = createWriteStream('./public/sitemap.xml');

// Create the sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://solidaritytn.org' });

// Pipe sitemap data to the write stream
sitemap.pipe(writeStream);

// Write each URL
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/aboutUsDetailed', changefreq: 'monthly', priority: 0.8 },
  { url: '/activity', changefreq: 'monthly', priority: 0.8 },
  { url: '/blogList', changefreq: 'weekly', priority: 0.7 },
  { url: '/state', changefreq: 'monthly', priority: 0.7 },
  { url: '/district', changefreq: 'monthly', priority: 0.7 },
  { url: '/pastLeaders', changefreq: 'yearly', priority: 0.6 },
  { url: '/contact', changefreq: 'yearly', priority: 0.5 },
  { url: '/joinMember', changefreq: 'monthly', priority: 0.9 }
];

links.forEach(link => sitemap.write(link));

// End the sitemap stream
sitemap.end();

writeStream.on('finish', () => {
  console.log('✅ Sitemap generated at /public/sitemap.xml');
});