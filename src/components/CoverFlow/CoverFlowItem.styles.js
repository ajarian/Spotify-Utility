import styled from "styled-components";
import palette from "../../theme";

export const Container = styled.div`
  width: 22.5rem;
  height: 25rem;
  margin-left: 1rem;
`;

export const Album = styled.div`
  width: 20rem;
  height: 20rem;
  margin-top: 1rem;
  box-shadow: -1px 4px 15px black;
  background-color: white;

  transition: all .5s ease-out;
  :hover {
    cursor: pointer;
  }
`;

export const AlbumInfo = styled.p`
  color: ${palette.black};
  font-size: 1.75rem;
  font-weight: bold;
  margin-top: 16px;
  border-bottom: 1px dashed ${palette.black};
`;
