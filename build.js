#!/usr/bin/env node

/**
 * Build script to create a ZIP file for Chrome Web Store upload
 * Works on Windows, macOS, and Linux
 *
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files and folders to include in the ZIP
const INCLUDE_FILES = [
  'manifest.json',
  'popup.html',
  'popup.css',
  'popup.js',
  'background.js',
  'icons',
];

// Output directory and filename
const OUTPUT_DIR = 'dist';
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
const VERSION = manifest.version;
const ZIP_NAME = `mylinks-dashboard-v${VERSION}.zip`;

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function ensureDistDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    log(`✓ Created ${OUTPUT_DIR} directory`, 'green');
  }
}

function validateFiles() {
  log('\n📋 Validating files...', 'yellow');
  const missing = [];

  for (const file of INCLUDE_FILES) {
    if (!fs.existsSync(file)) {
      missing.push(file);
    }
  }

  if (missing.length > 0) {
    log(`✗ Missing files: ${missing.join(', ')}`, 'red');
    process.exit(1);
  }

  log('✓ All required files present', 'green');
}

function createZip() {
  const outputPath = path.join(OUTPUT_DIR, ZIP_NAME);

  // Remove existing zip if present
  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }

  log(`\n📦 Creating ${ZIP_NAME}...`, 'yellow');

  const filesToZip = INCLUDE_FILES.join(' ');
  const isWindows = process.platform === 'win32';

  try {
    if (isWindows) {
      // Use PowerShell's Compress-Archive on Windows
      const psCommand = `Compress-Archive -Path ${INCLUDE_FILES.join(', ')} -DestinationPath "${outputPath}" -Force`;
      execSync(`powershell -Command "${psCommand}"`, { stdio: 'inherit' });
    } else {
      // Use zip command on macOS/Linux
      execSync(`zip -r "${outputPath}" ${filesToZip}`, { stdio: 'inherit' });
    }

    // Verify zip was created
    if (fs.existsSync(outputPath)) {
      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      log(`\n✓ Successfully created: ${outputPath} (${sizeKB} KB)`, 'green');
      log(`\n🚀 Ready to upload to Chrome Web Store!`, 'green');
    } else {
      throw new Error('ZIP file was not created');
    }
  } catch (error) {
    log(`\n✗ Error creating ZIP: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Main execution
console.log('═'.repeat(50));
log('  MyLinks Dashboard - Build Script', 'yellow');
log(`  Version: ${VERSION}`);
console.log('═'.repeat(50));

validateFiles();
ensureDistDir();
createZip();

console.log('═'.repeat(50));
