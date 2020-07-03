import React, { Fragment } from 'react';

const contentful = require('contentful');

export const buildClient = () => (
  contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'x2o3dui8zm4o',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'ZNje5-hugUbC4E-o4YMD4SXKJZxmt58dF4n_pRew66I',
  })
);

export const renderLongTextParagraphs = (text, className = '') => (
  text.split('\n').map((item, i) => (
    item
    && <p key={i} className={className}>{item}</p>
  ))
);

export const renderLongTextBreaks = (text) => (
  text.split('\n').map((item, i) => (
    item
    && (
      <Fragment key={i}>
        {item}
        {
          text.split('\n').length > (i + 1)
          && <br />
        }
      </Fragment>
    )
  ))
);

export const renderPhoneNumber = (number) => {
  const match = number.toString().match(/^(\d{3})(\d{3})(\d{4})$/);
  return (
    `(${match[1]}) ${match[2]}-${match[3]}`
  );
};

export const sortByOrder = (a, b) => {
  return a.fields.order - b.fields.order;
};

const allFuncs = {
  buildClient,
};

export default allFuncs;
