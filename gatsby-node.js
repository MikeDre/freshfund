exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allWinnersJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (data.errors) {
    console.log('Error retrieving data', data.errors);
    return;
  }

  const winnersTemplate = require.resolve('./src/templates/WinnersPage.js');

  data.data.allWinnersJson.edges.forEach((edge) => {
    createPage({
      path: `/winners/${edge.node.slug}/`,
      component: winnersTemplate,
      context: {
        slug: edge.node.slug,
        image: edge.node.image,
      },
    });
  });
};
