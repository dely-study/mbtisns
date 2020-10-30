const models = require('../../../models');

const resolvers = {
  Query: {
    getPost: async (_, { id }) => {
      const existPost = await models.post.findOne({
        where: {
          id,
        },
      });
      if (existPost) {
        return {
          ok: true,
          post: existPost,
          error: null,
        };
      }
      return {
        ok: false,
        post: null,
        error: '해당되는 게시글이 없습니다.',
      };
    },
  },
};

module.exports = resolvers;
