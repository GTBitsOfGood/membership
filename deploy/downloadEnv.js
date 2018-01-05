'use strict';

const fs = require('fs')
const dotEnvExists = fs.existsSync('.env')
if (dotEnvExists && process.env.NODE_ENV !== 'production') { // Force download on production
  console.log('downloadEnv.js: .env exists, probably running on development environment');
  process.exit();
}

// On Google Cloud Platform authentication is handled for us
const gcs = require('@google-cloud/storage')()
const bucketName = `envvars.${process.env.GCLOUD_PROJECT}.bitsofgood.org`
console.log(`Downloading .env from bucket "${bucketName}"`)

gcs
  .bucket(bucketName)
  .file('.env')
  .download({ destination: '.env' })
  .then(() => {
    console.info('downloadEnv.js: .env downloaded successfully')
  })
  .catch(e => {
    console.error(`downloadEnv.js: There was an error: ${JSON.stringify(e, undefined, 2)}`)
  })

console.log(`Downloading .env.frontend from bucket "${bucketName}"`)

gcs
  .bucket(bucketName)
  .file('.env.frontend')
  .download({ destination: '.env.frontend' })
  .then(() => {
    console.info('downloadEnv.js: .env.frontend downloaded successfully')
  })
  .catch(e => {
    console.error(`downloadEnv.js: There was an error: ${JSON.stringify(e, undefined, 2)}`)
  })