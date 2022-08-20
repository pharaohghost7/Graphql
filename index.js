'use strict'

const { graphql, buildSchema} = require('graphql');


// Definiendo servidor

const app = express();
const port = process.env.Port || 3000;



// Definiendo el esquema

const Schema =  buildSchema(`
    type Query {
      hello: String
      Saludo: String
    }
    `);

//resolvers
var RootValue = { 
hello: () => 'Hello World!',
Saludo: () => 'Getting all'
};

var source = '{ Saludo }' ;

app.use('/api', graphqlHTTP(
    {
        schema: Schema,
        rootValue: RootValue,
        graphiql: true
    }
),);

app.listen(port, () =>{
    console.log(`Server is listening at http://localhost:${port}/api`)
})

