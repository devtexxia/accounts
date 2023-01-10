const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('../middleware/error-handler');

app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(cors({ origin: (origin, callback) => callback(null, true),  credentials: true }));
app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});