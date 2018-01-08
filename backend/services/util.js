'use strict';

const Language = require('mongoose').model('Language');

async function getAllLanguages() {
  return await Promise.all([
    Language.find({ category: 'languages' }),
    Language.find({ category: 'databases' }),
    Language.find({ category: 'deployment' }),
    Language.find({ category: 'web_technologies' })
  ]).then(([languages, databases, deployment, web_technologies]) => ({
    languages,
    databases,
    deployment,
    web_technologies
  }));
}

async function strsToLangs(strings, category) {
  // if languages aren't loaded load them from DB;
  const languages = await getAllLanguages();

  const match = string1 => element => string1 === element.name;

  return strings.map(string => languages[category].find(match(string)));
}

function generateScore(user) {
  let score = 0;
  // github stats
  score += user.github.public_repos + user.github.followers;

  // credit hours
  score += 14 - user.credit_hours;
  // graduation dates
  const currYear = new Date().getFullYear();
  const gradYear = parseInt(user.graduation_date.split(' ')[1], 10);
  score += gradYear - currYear;

  // programming languages
  user.languages.forEach(curr => (score += curr.value));

  // Web Tech
  user.web_technologies.forEach(curr => (score += curr.value));

  // Databases
  user.databases.forEach(curr => (score += curr.value));

  // Deployment
  user.deployment.forEach(curr => (score += curr.value));

  // pm interest
  if (user.pm_interest) {
    score += 1;
  }

  // em interest
  if (user.em_interest) {
    score += 1;
  }

  return score;
}
module.exports = {
  strsToLangs,
  generateScore
};
