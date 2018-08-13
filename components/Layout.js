import Box from 'superbox';

const Layout = props => (
  <Box m={6} p={0} fontSize={4}>
    {props.children}
  </Box>
);

export default Layout;
