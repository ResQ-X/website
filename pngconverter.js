const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgFolder = './public/images'; // Folder containing SVG files
const pngFolder = './png'; // Folder to save PNG files

// Ensure PNG folder exists, or create it
if (!fs.existsSync(pngFolder)) {
  fs.mkdirSync(pngFolder);
}

// Read the SVG folder and convert each SVG file to PNG
fs.readdir(svgFolder, (err, files) => {
  if (err) {
    console.error('Error reading SVG folder:', err);
    return;
  }

  files.forEach((file) => {
    const inputPath = path.join(svgFolder, file);
    const outputPath = path.join(pngFolder, `${path.basename(file, '.svg')}.png`);

    // Check if the file is an SVG before converting
    if (path.extname(file).toLowerCase() === '.svg') {
      sharp(inputPath)
        .png()
        .toFile(outputPath, (err) => {
          if (err) {
            console.error(`Error converting ${file} to PNG:`, err);
          } else {
            console.log(`Converted ${file} to PNG.`);
          }
        });
    } else {
      console.log(`${file} is not an SVG file, skipping.`);
    }
  });
});
