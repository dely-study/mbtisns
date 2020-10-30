const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express'); //express를 불러오자
const db = require('./models');
const app = express(); //express를 쓰자
const port = 3000;

const schema = require('./graphql/schema');
// console.log(schema);

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('Hello World');
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
  });
});
