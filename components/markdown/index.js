import { H1, H2, H3, H4, H5, H6 } from './Headings';
import { Code, InlineCode, Pre } from './Code';
import { A, UL, LI, P, Img, Blockquote } from './Other';

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  inlineCode: InlineCode,
  code: Code,
  pre: Pre,
  ul: UL,
  li: LI,
  a: A,
  p: P,
  img: Img,
  blockquote: Blockquote,
};

export default components;