import React, { Component } from 'react';
import { LoadingWrap } from './styles';

const Loading = () => {
  return (
    <LoadingWrap
      style={{
        backgroundImage: `url('${window.location.origin}/galaxy-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <img
        src={`${window.location.origin}/earth512.png`} alt='loading'
        className='loading-logo'
      />
    </LoadingWrap>
  );
};

type IProps = {
};

type IState = {
  isLoading: boolean,
};

const withSplash = (WrappedComponent) => {
  return class WithSplash extends Component<IProps, IState> {
    constructor(props) {
      super(props)

      this.state = {
        isLoading: true,
      }
    };

    componentDidMount() {
      this.load()
    };

    load() {
      setTimeout(() => {
        this.setState({
          isLoading: false
        });
      }, 3000)
    };

    render() {
      return this.state.isLoading
        ? Loading()
        : <WrappedComponent {...this.props} />
    };
  };
};

export default withSplash;