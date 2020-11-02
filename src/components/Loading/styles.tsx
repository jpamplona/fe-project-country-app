import styled from 'styled-components';

export const LoadingWrap = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  .absolute-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .img-globe {
    position: absolute;
    width: 250px;
  }

  .img-magnifying-glass {
    position: absolute;
    width: 125px;
    -webkit-filter: drop-shadow(5px 5px px #222);
    filter: drop-shadow(5px 5px 5px #222);
    animation: search 3s infinite forwards;
  }

  @keyframes search {
    0% {
      transform: translate(-25%, -25%);
    }
    20% {
      transform: translate(-100%, -50%);
    }
    40% {
      transform: translate(-50%, 25%);
    }
    60% {
      transform: translate(-15%, -75%);
    }
    80% {
      transform: translate(15%, 25%);
    }
    100% {
      transform: translate(-25%, -25%);
    }
  }
`;