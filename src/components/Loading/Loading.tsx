import { LoadingCircles, LoadingBackdrop } from './style';

export const Loading = () => {
  return (
    <LoadingBackdrop>
      <LoadingCircles>
        <div id='circular3d_1G' className='circular3dG'></div>
        <div id='circular3d_2G' className='circular3dG'></div>
        <div id='circular3d_3G' className='circular3dG'></div>
        <div id='circular3d_4G' className='circular3dG'></div>
        <div id='circular3d_5G' className='circular3dG'></div>
        <div id='circular3d_6G' className='circular3dG'></div>
        <div id='circular3d_7G' className='circular3dG'></div>
        <div id='circular3d_8G' className='circular3dG'></div>
      </LoadingCircles>
    </LoadingBackdrop>
  );
};
