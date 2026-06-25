import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = '/home/ubuntu/workspace/.platform/attachments';
const destDir = '/home/ubuntu/workspace/app/src/frontend/public/assets';

const files = [
  {
    src: path.join(srcDir, 'love_like_you_art-019efc14-36bf-75dc-9e27-6352d7b30767.jpg'),
    dest: path.join(destDir, 'love_like_you_art.jpg')
  },
  {
    src: path.join(srcDir, 'spiritus_cover_art-019efc14-39b2-77c7-a465-ab8c0e5aa62c.jpg'),
    dest: path.join(destDir, 'spiritus_cover_art.jpg')
  }
];

for (const { src, dest } of files) {
  fs.copyFileSync(src, dest);
  console.log(`Copied: ${path.basename(src)} -> ${path.basename(dest)}`);
}

console.log('Done.');
