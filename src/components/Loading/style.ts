import styled from 'styled-components';

const LoadingCircles = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  & .circular3dG {
    position: absolute;
    background-color: #50b4d8;
    width: 28px;
    height: 28px;
    border-radius: 30px;
    animation-name: bounce_circular3dG;
    animation-duration: 0.72s;
    animation-iteration-count: infinite;
    animation-direction: linear;
  }
  & #circular3d_1G {
    left: 41px;
    top: 6px;
    animation-delay: 0.27s;
  }
  & #circular3d_2G {
    left: 61px;
    top: 23px;
    animation-delay: 0.36s;
  }
  & #circular3d_3G {
    left: 73px;
    top: 45px;
    animation-delay: 0.45s;
  }
  #circular3d_4G {
    left: 69px;
    top: 67px;
    animation-delay: 0.54s;
  }
  & #circular3d_5G {
    left: 42px;
    top: 73px;
    animation-delay: 0.63s;
  }
  & #circular3d_6G {
    left: 8px;
    top: 48px;
    animation-delay: 0.72s;
  }
  & #circular3d_7G {
    left: 0px;
    top: 14px;
    animation-delay: 0.8099999999999999s;
  }
  & #circular3d_8G {
    left: 17px;
    top: 0px;
    animation-delay: 0.9s;
  }
  @keyframes bounce_circular3dG {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.3);
    }
  }
`;

const LoadingBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
`;

export { LoadingCircles, LoadingBackdrop };
