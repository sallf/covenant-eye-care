const contentful = require('contentful');

export const buildClient = () => (
  contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'x2o3dui8zm4o',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'ZNje5-hugUbC4E-o4YMD4SXKJZxmt58dF4n_pRew66I',
  })
);

const allFuncs = {
  buildClient,
};

export default allFuncs;
