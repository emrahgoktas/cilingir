const fs = require('fs');
const path = require('path');

const regionsFile = path.join(__dirname, '..', 'src', 'data', 'regions.ts');
let content = fs.readFileSync(regionsFile, 'utf8');

const allRegions = [];
for (let i = 1; i <= 10; i++) {
  const batchFile = path.join(__dirname, `batch${i}.json`);
  if (fs.existsSync(batchFile)) {
    const batch = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
    allRegions.push(...batch);
  }
}

console.log(`Loaded ${allRegions.length} regions from batch files`);

// Format each region as TypeScript
function formatRegion(r) {
  const faqsStr = r.faqs.map(f =>
    `      {\n        question: ${JSON.stringify(f.question)},\n        answer: ${JSON.stringify(f.answer)},\n      }`
  ).join(',\n');

  return `  {
    slug: ${JSON.stringify(r.slug)},
    name: ${JSON.stringify(r.name)},
    title: ${JSON.stringify(r.title)},
    description: ${JSON.stringify(r.description)},
    h1: ${JSON.stringify(r.h1)},
    intro: ${JSON.stringify(r.intro)},
    responseTime: ${JSON.stringify(r.responseTime)},
    district: ${JSON.stringify(r.district)},
    priority: ${r.priority},
    faqs: [
${faqsStr}
    ],
  }`;
}

const regionsStr = allRegions.map(formatRegion).join(',\n');
const insertStr = ',\n' + regionsStr;

// Insert before the closing "];" of RAW_REGIONS
const marker = '];\n\nexport const REGIONS';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.error('Could not find insertion marker');
  process.exit(1);
}

content = content.slice(0, idx) + insertStr + '\n' + content.slice(idx);
fs.writeFileSync(regionsFile, content, 'utf8');
console.log(`Successfully inserted ${allRegions.length} regions into regions.ts`);
