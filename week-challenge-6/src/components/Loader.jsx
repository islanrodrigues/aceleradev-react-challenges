import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/loader.json';

class Loader extends Component {

    render() {
      const { height, width } = this.props;

      const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };

        return (
            <div className="container">
              <Lottie 
                  options={defaultOptions}
                  height={height || 300}
                  width={width || 300}
              />
            </div>
        )
    }
}

export default Loader;