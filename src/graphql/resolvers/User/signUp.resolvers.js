const models = require('../../../models');

const resolvers = {
  Mutation: {
    signUp: async (_, args, {}) => {
      try {
        const createUser = await models.user.create({
          ...args,
        });
        if (createUser) {
          //   const token = createJWT(createUser.id);
          return {
            ok: true,
            token: '',
            error: null,
          };
        }
      } catch (error) {
        console.log(error);
        return {
          ok: false,
          token: null,
          error: 'singup failed',
        };
      }
    },
  },
};

module.exports = resolvers;
