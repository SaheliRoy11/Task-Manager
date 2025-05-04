require('dotenv').config();
require('./config/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const error404 = require('./middleware/404');
const errorHandlerMiddleware = require('./middleware/error');

app.use(express.static('./public'));
app.use(express.json());

app.use('/', require('./routes'));

//custom middleware function to send proper response for 404 error
app.use(error404);
app.use(errorHandlerMiddleware);


app.listen(port, (err) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(`Server running on port ${port}`);
})
