require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser'); // eslint-disable-line import/no-extraneous-dependencies

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./service/mongodb');

// -----------------Router----------------
const router = require('./routes/contact');

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
