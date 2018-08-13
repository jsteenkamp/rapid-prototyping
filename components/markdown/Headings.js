import sys from 'system-components';

const Headings = sys(
  {
    is: 'h6',
    fontSize: 4,
    fontWeight: 0,
    lineHeight: 1,
    letterSpacing: 0.25,
    color: 'text',
  },
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'space',
  'textAlign'
);

Headings.displayName = 'Heading';

export const H1 = props => (
  <Headings
    is="h1"
    fontSize={[6, 7]}
    fontWeight={0}
    letterSpacing={-1.5}
    {...props}
  />
);

export const H2 = props => (
  <Headings
    is="h2"
    fontSize={[5, 6]}
    fontWeight={0}
    letterSpacing={-0.5}
    mt={'1em'}
    {...props}
  />
);

export const H3 = props => (
  <Headings
    is="h3"
    fontSize={[5, 6]}
    fontWeight={1}
    letterSpacing={0}
    mt={'1em'}
    {...props}
  />
);

export const H4 = props => (
  <Headings
    is="h4"
    fontSize={5}
    fontWeight={1}
    letterSpacing={0.25}
    {...props}
  />
);

export const H5 = props => (
  <Headings is="h5" fontSize={4} fontWeight={1} letterSpacing={0} {...props} />
);

export const H6 = props => (
  <Headings
    is="h6"
    fontSize={4}
    fontWeight={2}
    letterSpacing={0.15}
    {...props}
  />
);
