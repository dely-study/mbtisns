const models = require('../../../models');

const resolvers = {
  Mutation: {
    createPost: async (_, args, {}) => {
      try {
        const createPost = await models.post.create({
          ...args,
        });
        if (createPost) {
          return {
            ok: true,
            post: createPost,
            error: null,
          };
        }
      } catch (error) {
        console.log(error);
        return {
          ok: false,
          post: null,
          error: 'create post failed',
        };
      }
    },
  },
};

module.exports = resolvers;
