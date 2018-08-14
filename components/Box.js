import SuperBox from 'superbox';

export const Box = ({ children, ...rest }) => (
  <SuperBox
    fontSize={[4, 8, 10]}
    my={6}
    p={4}
    color="white"
    bg="cornflowerblue"
    {...rest}
  >
    {children}
  </SuperBox>
);

export default Box;
