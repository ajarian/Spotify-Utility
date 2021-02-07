import TopListensLayout from './layouts/TopListens/TopListensLayout';
import styled from 'styled-components';
import palette from './theme';

const Container = styled.div`
  background: linear-gradient(
    to top right,
    ${palette.darkGreen},
    ${palette.lightGreen}
  );
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <TopListensLayout />
    </Container>
  );
}

export default App;
