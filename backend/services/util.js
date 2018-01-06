"use strict";

const Language = require('mongoose').model('Language');
let cache = null;
async function getAllLanguages() {
    return await Promise.all([
        Language.find({ category: 'languages' }),
        Language.find({ category: 'databases' }),
        Language.find({ category: 'deployment' }),
        Language.find({ category: 'web_technologies' }),
    ]).then(([languages, databases, deployment, web_technologies]) => (
        { languages, databases, deployment, web_technologies })
        );
}

async function convertStringsToLanguages(strings, category) {
    // if languages aren't loaded load them from DB;
    // console.log('cache');
    // console.log(cache);
    if (!cache) {
        cache = await getAllLanguages();
    }

    const match = string1 => (element => string1 === element.name);

    return strings.map(string => cache[category].find(match(string)))
}


module.exports = {
    convertStringsToLanguages,
};