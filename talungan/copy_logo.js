const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\c8d54a83-655c-4899-adde-610b991fe92d\\talungan_logo_1777390379205.png';
const destDir = 'c:\\Users\\LENOVO\\OneDrive\\Documents\\lubung\\talungan\\assets';
const dest = path.join(destDir, 'logo.png');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log('Copied successfully!');
