const restify = require('restify');
const errors = require('restify-errors');
const corsM = require('restify-cors-middleware');

const logger = require('morgan');

module.exports = () => {
    const app = restify.createServer({
        name: 'automation-build-example',
        version: '0.1.0'
    });
    
    const cors = corsM({
        allowHeaders: ['Content-Type']
    });

    app.pre(cors.preflight);
    app.use(cors.actual);

    app.use(logger('dev'));

    app.get('/', (req, res) => {
        res.send('Example Build Example: try 3');
    });

    // Errors tracking
    app.on('restifyError', (req, res, err, cb) => {
        console.log(err);
        return cb();
    });

    const port = process.env.PORT || 3002;
    app.listen(port);

    console.log('Server is listening on port', port);

    return app;
}
