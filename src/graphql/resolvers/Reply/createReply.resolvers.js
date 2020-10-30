const models = require('../../../models');

const resolvers = {
  Mutation: {
    createReply: async (_, args, {}) => {
      try {
        const createReply = await models.reply.create({
          ...args,
        });
        if (createReply) {
          return {
            ok: true,
            reply: createReply,
            error: null,
          };
        }
      } catch (error) {
        console.log(error);
        return {
          ok: false,
          reply: null,
          error: 'create reply failed',
        };
      }
    },
  },
};

module.exports = resolvers;
