import styled from 'styled-components';
import palette from '../../theme';
import { ReactComponent as User } from '../../assets/user.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const CoverFlowContainer = styled.div`
  box-shadow: -3px 2px 2px ${palette.black};
`;

export const Footer = styled.div`
  display: flex;
`;

export const SwitcherContainer = styled.div`
  padding: .5rem 1rem;
  border: 1px solid black;
  margin-top: 1rem;
  height: 2rem;
  background-color: ${palette.powder};
  box-shadow: -3px 2px 2px ${palette.black};
`;

export const Title = styled.h1`
  background-color: ${palette.orange};
  border: 1px solid black;
  color: ${palette.black};
  font-size: 3rem;
  padding-left: 0.5rem;
  box-shadow: -3px 2px 2px ${palette.black};
  width: 23.5rem;
  margin-bottom: 1rem;
`;

const UserContainer = styled.div`
  border: 1px solid black;
  margin-top: 1rem;
  height: 3rem;
  width: 3rem;
  margin-left: 1rem;
  text-align: center;
  background-color: ${palette.lavender};
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -3px 2px 2px ${palette.black};
`;

const Icon = styled(User)`
  width: 24px;
  height: 24px;
  transition: all .1s ease-out;

  :hover {
    cursor: pointer;
    color: white;
  }
`;

export const UserIcon = () => {
  return(
    <UserContainer>
      <Icon />
    </UserContainer>
  );
};
