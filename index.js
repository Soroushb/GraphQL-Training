import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from './schema'

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL')
});

const root = { product: () => {
    return{
        "id": 1,
        "name": "The Golden Bough",
        "description": "A Comparative Study of Magic and Religion",
        "price": 5.00,
        "soldout": false
    }
}}

app.use('/graphql' , graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log("Running on localhost:8080"));

