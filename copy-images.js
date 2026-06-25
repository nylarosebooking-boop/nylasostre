const fs = require('fs');
const path = require('path');

const sourceDir = '/home/ubuntu/workspace/.platform/attachments';
const targetDir = '/home/ubuntu/workspace/app/src/frontend/public/assets';

const files = [
  {
    src: 'love_like_you_art-019efc14-36bf-75dc-9e27-6352d7b30767.jpg',
    dest: 'love_like_you_art.jpg'
  },
  {
    src: 'spiritus_cover_art-019efc14-39b2-77c7-a465-ab8c0e5aa62c.jpg',
    dest: 'spiritus_cover_art.jpg'
  }
];

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (const file of files) {
  const srcPath = path.join(sourceDir, file.src);
  const destPath = path.join(targetDir, file.dest);
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${file.src} -> ${file.dest}`);
}

console.log('Done.');
