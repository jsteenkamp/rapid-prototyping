import sys from 'system-components';

export const Code = sys({
  is: 'code',
  fontWeight: 600,
  color: 'steelblue',
});

export const InlineCode = sys({
  is: 'code',
  color: 'cornflowerblue',
});

export const Pre = sys({
  is: 'pre',
  color: 'royalblue',
  p: 4,
  bg: 'aliceblue'
});
