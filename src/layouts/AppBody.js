import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: calc(100vh - 3rem);
  display: flex;
`;
const AppBody = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppBody;
