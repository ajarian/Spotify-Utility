import React from 'react';
import styled from 'styled-components';

import palette from '../../theme';
import CoverFlowItem from './CoverFlowItem';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid black;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${palette.pink};
`;

const CoverFlow = () => {
  return (
    <Container>
      <CoverFlowItem />
    </Container>
  )
};

export default CoverFlow;
