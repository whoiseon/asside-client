import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const errorBounce = keyframes`
    0% {
        transform: translateY(0)
    }
    20% {
        transform: translateY(-3px);
    }
    40% {
        transform: translateY(0)
    }
    80% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0)
    }
`;

const transitions = { fadeIn, fadeOut, fadeInSlideUp, errorBounce };

export default transitions;
