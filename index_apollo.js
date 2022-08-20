const {ApolloServer, gql} = require('apollo-server')
const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');

const typeDefs = gql`

type Book {
    title: String
    authon: String
}


type Query {
    books: [Book]
}


`
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  // Resolvers

  const resolvers ={
    Query: {
        books: () => books,
    },
  };

  // Definiendo el servidor de Apollo

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',

    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true}),
    ],
  });

  server.listen().then(({ url}) => 
  console.log(`Server ready at ${url}`));