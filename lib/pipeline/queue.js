
const Queue = require('bull');

const videosQueue = new Queue('videos', {
  redis: process.env.REDIS_URL
});

const notificationsQueue = new Queue('notifications', {
  redis: process.env.REDIS_URL
});

module.exports = {
  videosQueue,
  notificationsQueue
};
