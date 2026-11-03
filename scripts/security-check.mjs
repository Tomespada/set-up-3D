import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const FORBIDDEN_PATTERNS = [
  { name: 'Google / Gemini API Key', regex: /AIza[0-9A-Za-z\-_]{35}/g },
  { name: 'Google OAuth Token', regex: /ya29\.[0-9A-Za-z\-_]+/g },
  { name: 'GitHub Personal Access Token', regex: /gh[pousr]_[0-9A-Za-z]{36,}/g },
  { name: 'Private Key Block', regex: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g },
  { name: 'Ruta local de usuario Windows/Mac', regex: /[A-Za-z]:\\Users\\[A-Za-z0-9_.-]+|\/Users\/[A-Za-z0-9_.-]+/g },
  { name: 'Correo electrónico personal', regex: /[a-zA-Z0-9._%+-]+@gmail\.com/gi },
  { name: 'Nombre personal en el código', regex: /\btom[aá]s\b/gi }
];

let issuesFound = 0;

function scanDir(dir) {
  for (const entry of fs.readdirSync(dir)) {
    if (entry === '.git' || entry === 'node_modules' || entry === 'dist') continue;
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(html|js|mjs|json|yml|yaml|md|css)$/i.test(entry)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const relPath = path.relative(rootDir, fullPath);
      for (const { name, regex } of FORBIDDEN_PATTERNS) {
        const matches = content.match(regex);
        if (matches) {
          console.error(`❌ [ALERTA] ${name} detectado en ${relPath}:`, matches[0]);
          issuesFound++;
        }
      }
    }
  }
}

scanDir(rootDir);

if (issuesFound === 0) {
  console.log('✅ AUDITORÍA SUPERADA: 0 claves API, 0 tokens y 0 datos personales encontrados. El repositorio es 100% seguro para subir a GitHub.');
  process.exit(0);
} else {
  console.error(`⚠️ Se encontraron ${issuesFound} posibles datos sensibles. Revísalos antes de hacer git push.`);
  process.exit(1);
}
