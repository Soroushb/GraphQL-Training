import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from './schema'

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL')
});

const root = { hello: () => "Hi"}

app.use('/graphql' , graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log("Running on localhost:8080"));

