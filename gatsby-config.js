/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Specify the configuration for Gatsby.
 *
 *            See https://www.gatsbyjs.org/docs/gatsby-config
 *            for detailed usage
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

const env = require('dotenv');

// export const siteMetadata: GatsbyConfig['siteMetadata'] = {};

// export const plugins: GatsbyConfig['plugins'] = [];

// export const pathPrefix: GatsbyConfig['pathPrefix'] = '';

// export const polyfill: GatsbyConfig['polyfill'] = true;

// export const mapping: GatsbyConfig['mapping'] = {};

// export const proxy: GatsbyConfig['proxy'] = {};

// export const developMiddleware: GatsbyConfig['developMiddleware'] = middleware => {};

// env.config({
//   path: `.env.${process.env.NODE_ENV ?? 'development'}`,
// });

const isProduction = process.env['NODE_ENV'] === 'production';

module.exports = {
  siteMetadata: {
    title: `A Gatsby Web App`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./types/@graphql.ts`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        // projectId & dataset
        ...require('./sanity/sanity.json')['api'],
        // version: '2021-03-25', // version is unused for v6
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
        watchMode: true,
        overlayDrafts: true,
      },
    },
  ],
};
