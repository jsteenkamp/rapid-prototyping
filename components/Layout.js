import sys from 'system-components';

const Container = sys({
  m: [3, 5],
  p: 0,
  fontSize: 4,
});

const Layout = props => (
  <Container>
    {props.children}
  </Container>
);

export default Layout;
