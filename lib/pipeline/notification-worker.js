const sendEmail = require('../utils/email');

module.exports = job => {
  // job.data = { email, mp3 }
  const { email, mp3 } = job.data;
  
  // send an email to a person
  // twilio
  return sendEmail(
    email,
    'Here is your mp3',
    `Here is a link to your mp3: ${mp3}. Have fun!`
  );
};
