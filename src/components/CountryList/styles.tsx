import styled from 'styled-components';

const media = {
  largeMobile: '@media(min-width: 480px)',
}

export const CountryListWrap = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  row-gap: 7px;
  column-gap: 7px;
  width: 100vw;
  margin: 5px 0;
  padding: 5px 25px 5px 0px;

  .country-item {
    border: .5px solid var(--color-primary);
    border-radius: 5px;
    background-color: var(--color-secondary);
    max-width: 300px;
    height: 155px;
    overflow: hidden;
    transition:
      width .3s cubic-bezier(0.55, 0.055, 0.675, 0.19),
      height .8s cubic-bezier(0.77, 0, 0.175, 1),
      border .3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      transform .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    :hover {
      border: 2px solid var(--color-primary);
      transform: scale(1.03);
    }
  }

  .country-item__link {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }

  .country-item__details {
    width: 200px;
    height: 90%;
    padding: 10px 0px 0px 15px;
  }

  .country-item__details__data {
    color: var(--color-accent);
    font-size: .9rem;
    margin: 5px 0px;
  }

  .country-item__figure {
    margin-right: 10px;
    width: 280px;
    height: 80%;
  }

  .country-item__flag {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  ${media.largeMobile} {
    row-gap: 12.5px;
    column-gap: 12.5px;

    .country-item {
      width: 170px;
      height: 250px;
    }

    .country-item__link {
      flex-direction: column-reverse;
      text-align: center;
    }

    .country-item__figure {
      margin: 10px 0px;
    }

    .country-item__details {
      width: 200px;
      height: 90%;
      padding: 0;
    }

    .country-item__details__data {
      padding: 0px 30px;
    }

    .country-item__figure {
      width: 90%;
    }
  }
`;