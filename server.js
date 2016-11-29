import express    from 'express';
import bodyParser from 'body-parser';
import mongoose   from 'mongoose';

import routes     from './routes/index';
import beers      from './routes/beers';

//Setup
let app = express();
let port = process.env.port || 8080;
mongoose.connect('mongodb://localhost:27017/beer-app');

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', routes);
app.use('/api/beers', beers);

//Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
