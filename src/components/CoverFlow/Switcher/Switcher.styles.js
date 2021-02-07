import styled from "styled-components";
import { ReactComponent as Chevron } from '../../../assets/chevron-right.svg';

const StyledChevron = styled(Chevron)`
  width: 1.25rem;
  height: 1.25rem;
  transition: all .1s ease-out;

  :hover {
    cursor: pointer;
    color: white;
  }
`;

export const LeftChevron = styled(StyledChevron)`
  transform: rotate(180deg);
`;

export const RightChevron = styled(StyledChevron)`
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
`;

export const TopCount = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-left: .65rem;
  margin-right: .5rem;
  margin-top: -.2rem;
  width: 3.5rem;
  text-align: center;
`;
