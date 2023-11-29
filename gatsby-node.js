exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/blog/post/*/`,
    toPath: `/blog/post/*`,
    isPermanent: true,
  });

  createRedirect({
    fromPath: `/event/post/*/`,
    toPath: `/event/post/*`,
    isPermanent: true,
  });

  createRedirect({
    fromPath: 'https://ceo.gatsbyjs.io/',
    toPath: 'https://jceoa.org/',
    isPermanent: true,
    force: true,
  });
};
