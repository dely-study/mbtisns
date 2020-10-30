const models = require('../../../models');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      const existUser = await models.user.findOne({
        where: {
          id,
        },
      });
      if (existUser) {
        return {
          ok: true,
          user: existUser,
          error: null,
        };
      }
      return {
        ok: false,
        user: null,
        error: '해당되는 유저의 정보가 없습니다.',
      };
    },
  },
};

module.exports = resolvers;
