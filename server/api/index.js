const express = require('express');
const tourRouter = require('./tour/routes');
const userRouter = require('./user/routes');
const jobRouter = require('./job/routes');
const authRouter = require('./auth/routes');

const apiRouter = express.Router();

apiRouter.use('/api/tour',tourRouter);
apiRouter.use('/api/user',userRouter);
apiRouter.use('/api/job',jobRouter);
apiRouter.use('/api/auth',authRouter);

module.exports = apiRouter;