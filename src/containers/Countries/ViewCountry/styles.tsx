import styled from 'styled-components';

const media = {
  largerMobile: '@media(min-width: 480px)',
  tablet: '@media(min-width: 650px)',
  laptop: '@media(min-width: 850px)'
}

export const CountryWrap = styled.div`
  margin: 15px 5px;

  .map-container {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .country-container {
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid var(--color-primary);
    margin: 10px;
    padding: 20px 15px;
  }

  .country-flag {
    max-width: 100%;
    object-fit: contain;
    transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);

    :hover {
      transform: scale(1.02);
    }
  }

  .country-description {
    display: flex;
    flex-flow: row wrap;
    margin: 25px 10px;
  }

  .country-description__divider {
    display: flex;
    flex-flow: column;
    row-gap: 20px;
    padding: 0 10px;
  }

  .controls-container {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 7.5px;
    padding: 0 20%;
    margin-top: 20px;
  }

  .button {
    padding: 10px;
    border: 1px solid var(--color-primary);
    border-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    font-weight: bold;
    transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);

    :hover {
      transform: scale(1.03);
    }

    :focus {
      outline: none;
    }
  }

  .button--primary {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }

  .button--normal {
    color: var(--color-accent);
  }

  ${media.largerMobile} {
    .country-description {
      justify-content: space-evenly;
    }

    .controls-container {
      padding: 0 35%;
    }
  }

  ${media.tablet} {
    .country-container {
      flex-flow: row nowrap;
      padding: 20px 10px;
      align-items: center;
    }

    .country-figure {
      margin-left: 50px;
    }

    .country-description {
      flex-flow: row nowrap;
      align-content: space-evenly;
      margin: 15px 20px;
      width: 100%;
    }

    .country-description__divider {
      row-gap: 15px;
    }
  }

  ${media.laptop} {
    .country-container {
      padding: 70px 10px;
    }

    .country-description__divider {
      row-gap: 35px;
    }
  }
`;