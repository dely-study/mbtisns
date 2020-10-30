const resolvers = {
    Query: {
        hello: () => 'hello',
    },
    Mutation: {
        saySomething: (_, {something}) => something,
    }
};

module.exports = resolvers;