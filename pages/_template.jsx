import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-responsive-grid';
import { colors, activeColors } from 'utils/colors';

import { rhythm, adjustFontSizeTo } from 'utils/typography';
import { config } from 'config';

const PREFIX = 'https://storybook.js.org';
const redirectHref = ({ protocol, host, href }) => {
  const match = href.match(/\/docs\/react-storybook(.*)$/);
  const newHref = match ? match[1] : href;
  const suffix = newHref.replace(`${protocol}//${host}`, '');
  return `${PREFIX}${suffix}`;
};

const PageTemplate = ({ children }) => {
  const href = redirectHref(window.location);
  window.location.href = href;

  return (
    <div key="body">
      <div key="warning">
        <strong>
          Redirecting to {href}
        </strong>
      </div>
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.object,
};

export default PageTemplate;
