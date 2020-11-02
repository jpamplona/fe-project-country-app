import styled from 'styled-components';

const media = {
  tablet: '@media(min-width: 650px)',
}

export const ErrorPageWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;

  .error-code {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin: 0px 20px 20px 20px;
  }

  .error-code__digit {
    display: block;
    font-size: 7rem;
    font-weight: bold;
    color: var(--color-primary);
  }

  .error-code__earth {
    width: 150px;
    margin: 0px 15px;
  }

  .error-message {
    margin-top: 2.5px;
    padding: 0px 20px;
    font-size: 1rem;
  }

  .btn-back {
    align-self: center;
    margin-top: 30px;
    padding: 8px 10px;
    width: 120px;
    background-color: var(--color-primary);
    border: 0px;
    border-radius: 20px;
    font-size: .8rem;
    font-weight: 800;
    cursor: pointer;
    transition: transform .2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    :hover {
      transform: scale(1.05);
    }
  }

  ${media.tablet} {
    .error-code__digit {
      font-size: 9rem;
    }

    .error-code__earth {
      width: 180px;
    }

    .error-message {
      font-size: 1.3rem;
    }

    .btn-back {
      font-size: 1rem;
    }
  }
`;