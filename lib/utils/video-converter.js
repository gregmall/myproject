
const { exec } = require('child_process');

const convert = url => {
  const pattern = /\[ffmpeg\] Destination: (?<name>.*)\.mp3/;
  return new Promise((resolve, reject) => {
    exec(`youtube-dl -x --audio-format mp3 ${url}`, {
      cwd: 'mp3s'
    }, (err, out) => {
      if(err) return reject(err);

      const { name } = out.match(pattern).groups;
      resolve(`mp3s/${name}.mp3`);
    });
  });
};

module.exports = convert;