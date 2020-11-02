import styled from 'styled-components';

export const LoadingWrap = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  .loading-logo {
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -15%;
    margin-left: -15%;
    width: 30%;
    animation-name: spin;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    } 
  }
`;