const express = require('express');
const { videosQueue, notificationsQueue } = require('./pipeline/queue');
const app = express();
const { UI, setQueues } = require('bull-board');

setQueues([videosQueue, notificationsQueue]);

app.use(express.json());

app.use('/board', UI);

app.post('/api/v1/youtube', (req, res, next) => {
  videosQueue.add({ ...req.body })
    .then(job => res.send({ ...req.body, jobId: job.id }))
    .catch(next);
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
