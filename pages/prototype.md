import Link from 'next/link';
import Box from 'superbox';

# Start with a Box

Box component is a universal component built with [superbox](https://github.com/jxnblk/superbox) a primitive component for your styles.

<Box
    fontSize={[4, 8, 10]}
    m={6}
    px={3}
    py={4}
    color='white'
bg='cornflowerblue'>
superbox
</Box> 

It appears that using `code` after rendering a component does not work.

```javascript

const test = 'Hello World';

const fn = () => {
  return test;
}

``` 

<Link href='/resources'><a>Resources</a></Link>