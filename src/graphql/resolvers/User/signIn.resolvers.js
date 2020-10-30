const models = require('../../../models');

const resolvers = {
  Mutation: {
    signIn: async (_, { email, password }, {}) => {
      const admin = await models.user.findOne({
        where: {
          email,
          password,
        },
      });
      if (admin) {
        //   const token = createJWT(admin.id);
        return {
          ok: true,
          token: '',
          error: null,
        };
      }
      return {
        ok: false,
        token: null,
        error: null,
      };
    },
  },
};

module.exports = resolvers;
