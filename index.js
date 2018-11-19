const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const keys = require("./src/config/keys");
const routes = require("./src/routes/index");
const app = express();

mongoose.connect(keys.MONGO_URI, {
  user: keys.MONGO_USER,
  pass: keys.MONGO_PASS
});

const env = process.env.NODE_ENV;

const siteUrl = ['http://127.0.0.1:8080', 'http://0.0.0.0:8080', 'http://127.0.0.1:3000', 'http://localhost:3000', undefined];

const corsOptions = {
  origin(origin, callback) {
    if (siteUrl.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname,'public')));

routes(app);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});

module.exports = app;