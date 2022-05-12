const contentfulRenderer = require('@contentful/rich-text-plain-text-renderer');
const readingTime = require('reading-time');

exports.onCreateNode = async ({ node, actions }) => {
  const { internal, body } = node;
  const { owner, type } = internal;
  const { createNodeField } = actions;

  if (type !== 'ContentfulBlogPost' || owner !== 'gatsby-source-contentful') {
    return;
  };

  const { raw } = body;
  const text = contentfulRenderer.documentToPlainTextString(JSON.parse(raw));
  const result = readingTime(text);
  
  createNodeField({ node, name: 'readingTime', value: result });
};
