import { FC } from "react";
import { BounceLoader } from 'react-spinners';

import Image from '../Image'

import usePhotos from './usePhotos';
import "./Album.styles.css";

const Album: FC = () => {
  const { photos, isLoading, photosError } = usePhotos();
  return (
    <div className="instructions-wrapper">
      {isLoading && <BounceLoader size={24}/>}
      {photos && photos.length > 0 && photos.map((photo) => (
        <Image key={photo.id} src={photo.previewUrl} />
      ))}
      {!!photosError && <span>Something went wrong. Please refresh the page.</span>}
    </div>
  );
};

export default Album;
