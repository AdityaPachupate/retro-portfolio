const fs = require('fs');
const path = require('path');
const constantsPath = path.join(__dirname, 'portfolio-data.json');
const constantsTexPath = path.join(__dirname, 'constants.tex');
let constants;
try {
  constants = JSON.parse(fs.readFileSync(constantsPath, 'utf8'));
} catch (error) {
  console.error(`Error reading or parsing portfolio-data.json: ${error.message}`);
  process.exit(1);
}
// Add helper to escape LaTeX special characters
function escapeLatex(value) {
    if (typeof value !== 'string') return value;
    return value.replace(/([_#$%&{}~^\\])/g, '\\$1');
}
// helper: safe nested property getter
function safeGet(obj, path) {
  return path.split('.').reduce((o, key) => (o && Object.prototype.hasOwnProperty.call(o, key)) ? o[key] : undefined, obj);
}
function hasValue(v) {
  return v !== undefined && v !== null;
}
let texContent = `% Auto-generated from constants.json\n`;
const email = safeGet(constants, 'socialMedia.email');
if (hasValue(email)) texContent += `\\newcommand{\\SocialEmail}{${escapeLatex(email)}}\n`;
const phone = safeGet(constants, 'socialMedia.phone');
if (hasValue(phone)) texContent += `\\newcommand{\\SocialPhone}{${escapeLatex(phone)}}\n`;
const linkedin = safeGet(constants, 'socialMedia.linkedinProfile');
if (hasValue(linkedin)) texContent += `\\newcommand{\\SocialLinkedin}{${escapeLatex(linkedin)}}\n`;
const githubProfile = safeGet(constants, 'socialMedia.githubProfile');
if (hasValue(githubProfile)) texContent += `\\newcommand{\\SocialGithub}{${escapeLatex(githubProfile)}}\n`;
const portfolio = safeGet(constants, 'otherLinks.portfolio');
if (hasValue(portfolio)) texContent += `\\newcommand{\\Portfolio}{${escapeLatex(portfolio)}}\n`;
const crmUrl = safeGet(constants, 'projectLinks.crmUrl');
if (hasValue(crmUrl)) texContent += `\\newcommand{\\CrmUrl}{${escapeLatex(crmUrl)}}\n`;
const crmGithubProject = safeGet(constants, 'projectLinks.crmGithubProject');
if (hasValue(crmGithubProject)) texContent += `\\newcommand{\\CrmGithubProject}{${escapeLatex(crmGithubProject)}}\n`;
const crmGithubSelected = safeGet(constants, 'projectLinks.crmGithubSelected');
if (hasValue(crmGithubSelected)) texContent += `\\newcommand{\\CrmGithubSelected}{${escapeLatex(crmGithubSelected)}}\n`;
try {
  fs.writeFileSync(constantsTexPath, texContent);
  console.log('Successfully generated constants.tex');
} catch (error) {
  console.error(`Error writing constants.tex: ${error.message}`);
  process.exit(1);
}
