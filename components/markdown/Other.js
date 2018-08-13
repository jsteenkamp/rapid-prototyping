import sys from 'system-components';

export const UL = sys({
  is: 'ul',
  type: 'square',
});

export const LI = sys({
  is: 'li',
  lineHeight: '1.75em',
});

export const A = sys({
  is: 'a',
  target: '_blank',
});

export const P = sys({
  is: 'p',
  color: 'text',
  lineHeight: '1.5em',
});

export const Img = sys({
  is: 'img',
  width: '100%',
});

export const Blockquote = sys({
  is: 'blockquote',
  m: 0,
  fontSize: '1.25em',
}, props => ({
  'font-style': 'italic',
  '& p': {
    margin: 0,
  }
}));