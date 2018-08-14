# Rapid Prototyping

See it running at [https://rapid.jsx.nz/](https://rapid.jsx.nz/)

## Getting Started

Install dependencies. You must have [Node.js](https://nodejs.org/en/) and npm and optionally [yarn](https://yarnpkg.com/en/) installed on your system.

`yarn install` or `npm install`

Run the development server which outputs on `http://localhost:3000`

`yarn dev` or `npm run dev`

The output rebuilds automatically as you make changes.
 
Add your markdown text and code in `pages/scratch.md`

## Deployment

Run `yarn build` or `npm run build` to generate static output in the `out` directory. You can upload this directory to your host.

I use [Now](https://zeit.co/now). Other options include [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/) and [Surge](https://surge.sh/).

## Next.js

[Next.js](https://nextjs.org/) is static and server-side application framework for [React](https://reactjs.org/).

## CSS-in-JS

* [Using styled-components with Next.js](https://jsramblings.com/2017/11/27/using-styled-components-with-next-js.html) shows how to configure [babel](https://babeljs.io/) correctly so you do not get checksum mismatches due to different class generation on the client and on the server. 
* [Theme Provider](https://github.com/zeit/next.js/issues/4170) this works in [Next.js 6](https://zeit.co/blog/next6).
* [styled-system](https://github.com/jxnblk/styled-system) and 
* [system-components](https://github.com/jxnblk/styled-system/tree/master/system-components) work fine.

## Resources

* [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [MDX](https://github.com/mdx-js/mdx) is a fully-featured MDX parser, loader and JSX renderer.
* [Next Plugins](https://github.com/zeit/next-plugins)
* [With styled-components](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components)
* [With unstated](https://github.com/zeit/next.js/tree/canary/examples/with-unstated)

