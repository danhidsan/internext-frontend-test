import { useQuery } from '@tanstack/react-query';

import { GetPhotosResponse, photosApi } from '../../__dont_modify__/api/photos';

const usePhotos = () => {
  const { data, isLoading, error } = useQuery<GetPhotosResponse>(['photos'], () => photosApi.getPhotos({ page: 1 }))

  return {
    photos: data?.photos || [],
    photosError: error,
    isLoading,
  }
};

export default usePhotos;
