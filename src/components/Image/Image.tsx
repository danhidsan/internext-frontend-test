import { FC } from 'react';

import './Image.styles.css';
import { ImageProps } from './Image.types';

const Image: FC<ImageProps> = ({ src }) => {
  return (
    <div className="image-container"><img className='image' src={src} alt=""/></div>
  );
};

export default Image;