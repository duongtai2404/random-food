const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

//router
const foodRoute = require('./route/FoodRoute');
const loginRoute = require('./route/login.route');

//graqhql
const schemas = require('./graphql/schemas/index');
const resolvers = require('./graphql/resolvers/index');

//middlewares
const isAuth = require('./middlewares/isAuth');
const foodGraud = require('./middlewares/FoodGruad');

const app = express();

app.use(cors());

const URI =
  'mongodb+srv://admin:jVaUjy3ogKxrsDht@cluster0.so5tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(bodyParser.json());

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schemas,
    rootValue: resolvers,
    graphiql: true
  })
);

app.use('/foods', foodGraud, foodRoute);
app.use('/login', loginRoute);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.log(err));
