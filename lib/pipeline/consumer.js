const {
  videosQueue,
  notificationsQueue
} = require('./queue');
  
videosQueue.process(5, `${__dirname}/video-worker.js`);
videosQueue.on('completed', job => {
  // enqueue a job onto a notifications queue
  notificationsQueue.add(job.returnvalue);
});
  
notificationsQueue.process(5, `${__dirname}/notifications-worker.js`);
  
