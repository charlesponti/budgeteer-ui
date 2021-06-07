import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.form``;

const Form = ({ children }) => (
  <Wrap>
    {children}
  </Wrap>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
