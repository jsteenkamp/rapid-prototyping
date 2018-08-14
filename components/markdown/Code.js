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
  p: 4,
  color: 'royalblue',
  bg: 'aliceblue'
});
