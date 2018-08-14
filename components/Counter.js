import React from 'react';
import { Subscribe, Container } from 'unstated';
import Box from './Box';

class CounterContainer extends Container {
  state = {
    count: 0
  };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
}

const Counter = () => (
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <>
          <Box is='button' fontSize={4} m={1} p={1} onClick={() => counter.decrement()}>-</Box>
          <Box width={150}>{counter.state.count}</Box>
          <Box is='button' fontSize={4} m={1} p={1} onClick={() => counter.increment()}>+</Box>
        </>
      )}
    </Subscribe>
  );

export default Counter;
