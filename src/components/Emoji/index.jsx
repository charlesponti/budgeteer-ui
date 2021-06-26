import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const EmojiWrap = styled.span.attrs({ role: 'img' })`
  font-size: ${(props) => (props.size === 'big' ? '48px' : '16px')}
`;

const Emoji = ({ children, kind, size }) => (
  <EmojiWrap
    aria-label={kind}
    size={size}
  >
    {children}

  </EmojiWrap>
);

Emoji.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Emoji;
