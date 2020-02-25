const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const users = [
  {
    firstName: 'Lachlan',
    lastName: 'Young',
    age: 23
  },
  {
    firstName: 'Austin',
    lastName: 'Wilshire',
    age: 2
  },
];

const resolvers = {
  Query: {
    Users: () => users,
    User: (userName) => users.filter((usr) => usr.firstName === userName)[0],
    legalUsers: () => users.filter((usr) => usr.age >= 21)
  },
};

const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(8000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});