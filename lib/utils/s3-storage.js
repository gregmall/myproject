
const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

const client = new S3();

const upload = filePath => {
  return new Promise((resolve, reject) => {
    client.upload({
      Bucket: 'alchemy-videos',
      Key: filePath.replace('/', '--'),
      Body: fs.createReadStream(`${__dirname}/../../${filePath}`),
      ACL: 'public-read'
    }, (err, results) => {
      if(err) reject(err);
      else resolve(results);
    });
  });
};

module.exports = upload;
