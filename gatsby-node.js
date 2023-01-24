exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions;

    createRedirect({
        fromPath: `/blog/post/*`,
        toPath: `/blog/post/*/`,
    });
}
