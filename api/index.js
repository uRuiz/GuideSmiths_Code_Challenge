const express = require("express");
const app = express();
// const bodyParser = require('body-parser');
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
const phonesRouter = require('./routes/phones');

app.use('/phones', phonesRouter);

app.use( (req, res, next) => {
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL not found'
    };
    res.status(404).send(respuesta);
});

app.listen(9000, () => {
    console.log("Server started on port 9000");
});



module.exports = app;