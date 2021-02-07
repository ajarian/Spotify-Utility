import React from 'react';

import CoverFlow from '../../components/CoverFlow/CoverFlow';
import Switcher from '../../components/CoverFlow/Switcher/Switcher';
import {
  Container,
  CoverFlowContainer,
  Footer,
  SwitcherContainer,
  Title,
  UserIcon
} from './TopListensLayout.styles';

const TopListensLayout = () => {
  return (
    <Container>
      <Title>Your Top Listens</Title>
      <CoverFlowContainer>
        <CoverFlow />
      </CoverFlowContainer>
      <Footer>
        <SwitcherContainer>
          <Switcher />
        </SwitcherContainer>
        <UserIcon />
      </Footer>
    </Container>
  );
};

export default TopListensLayout;
