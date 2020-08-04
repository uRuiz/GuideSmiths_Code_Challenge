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

app.listen(9000, () => {
 console.log("The server is started on port 9000");
});



module.exports = app;