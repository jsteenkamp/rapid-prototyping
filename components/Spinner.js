import styled from 'styled-components';

// create a spinning box with one missing side
const Spinner = styled.div`
  &:not(:required) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -24px 0 0 -24px;
    width: 48px;
    height: 48px;
    border: 5px solid cornflowerblue;
    border-radius: 48px;
    border-right-color: transparent;
    display: ${props => props.show ? 'block' : 'none'};
    animation: spinner 1125ms infinite linear;
  }
  
  @keyframes spinner {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
`;

export default Spinner;