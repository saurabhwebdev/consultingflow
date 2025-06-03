/**
 * This script generates the OpenGraph image from the HTML template
 * To use: npm install puppeteer
 * Then: node scripts/generate-og-image.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Generating OpenGraph image...');
  
  try {
    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set the viewport to the OpenGraph image dimensions
    await page.setViewport({ width: 1200, height: 630 });
    
    // Get the path to the HTML template
    const htmlPath = path.join(__dirname, '..', 'public', 'og-image.html');
    const fileUrl = `file://${htmlPath}`;
    
    // Navigate to the HTML file
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Take a screenshot
    const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
    await page.screenshot({ path: outputPath });
    
    await browser.close();
    
    console.log(`OpenGraph image generated successfully at: ${outputPath}`);
  } catch (error) {
    console.error('Error generating OpenGraph image:', error);
    process.exit(1);
  }
})(); 