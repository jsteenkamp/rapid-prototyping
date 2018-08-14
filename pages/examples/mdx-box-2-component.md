import SuperBox from 'superbox';
import Box from '../../components/Box';

# Make our own Box Component

Duplication is far cheaper than the wrong abstraction

This is SuperBox:

<SuperBox
    fontSize={[4, 8, 10]}
    my={6}
    p={4}
    color='white'
    bg='cornflowerblue'>
  SuperBox
</SuperBox>

This is our Box component:

<Box>
  Box Component
</Box>


```html
<SuperBox
    fontSize={[4, 8, 10]}
    my={6}
    p={4}
    color='white'
    bg='cornflowerblue'>
  SuperBox
</SuperBox>

<Box>
  Box
</Box>
```
