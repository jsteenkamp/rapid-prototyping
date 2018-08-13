// next.config.js
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'md', 'mdx',],
});
