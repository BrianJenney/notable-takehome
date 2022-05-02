const express = require('express');
const bodyParser = require('body-parser');
const allRoutes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('tiny'));
app.use(bodyParser.json());

// we use cors library to prevent annoying cors issues
app.use(cors());

// Now let's tell our app about those routes we made!
app.use(allRoutes);

app.get('/', (req, res, next) => {
  return res.json('Hello! You\'ve hit the home route. Try another.');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    /*
     if we're in development mode, include stack trace (full error object)
     otherwise, it's an empty object so the user doesn't see all of that
    */
    error: app.get('env') === 'development' ? err : {},
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
