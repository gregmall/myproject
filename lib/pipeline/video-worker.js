const convert = require('../utils/video-converter');
const upload = require('../utils/s3-storage');

module.exports = async(job) => {
  // convert youtube video to mp3
  const filePath = await convert(job.data.videoUrl);
  // save the mp3 in s3
  const { Location } = await upload(filePath);

  return {
    mp3: Location,
    email: job.data.email
  };
};
